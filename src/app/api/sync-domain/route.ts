import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: Request) {
  const body = await request.text()

  // Verify Sanity webhook signature (fail closed if secret is unset)
  const secret = process.env.SANITY_WEBHOOK_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }
  const signature = request.headers.get('sanity-webhook-signature') ?? ''
  const expected = `sha256=${crypto.createHmac('sha256', secret).update(body).digest('hex')}`
  const sigBuf = Buffer.from(signature)
  const expBuf = Buffer.from(expected)
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Query all sites that have both customDomain and previewSlug
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
  const query = encodeURIComponent(
    `*[_type == "site" && defined(customDomain) && defined(previewSlug.current)]{ customDomain, "slug": previewSlug.current }`
  )
  const sanityRes = await fetch(
    `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`
  )
  const { result } = await sanityRes.json() as { result: { customDomain: string; slug: string }[] }

  // Build new domain map
  const items: Record<string, string> = {}
  for (const { customDomain, slug } of result) {
    if (customDomain && slug) items[customDomain] = slug
  }

  // Update Edge Config
  const edgeConfigId = process.env.VERCEL_EDGE_CONFIG_ID
  const apiToken = process.env.VERCEL_API_TOKEN
  const updateRes = await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`,
    {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${apiToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ operation: 'upsert', key: 'domainMap', value: items }],
      }),
    }
  )

  if (!updateRes.ok) {
    const err = await updateRes.text()
    return NextResponse.json({ error: err }, { status: 500 })
  }

  return NextResponse.json({ ok: true, synced: Object.keys(items).length })
}
