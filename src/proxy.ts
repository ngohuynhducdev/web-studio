import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { get } from '@vercel/edge-config'
import { isAuthorizedAdmin, UNAUTHORIZED_HEADERS } from '@/lib/adminAuth'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // HTTP Basic Auth for /admin routes (constant-time, fails closed)
  if (pathname.startsWith('/admin')) {
    if (!isAuthorizedAdmin(request.headers.get('authorization'))) {
      return new NextResponse('Unauthorized', { status: 401, headers: UNAUTHORIZED_HEADERS })
    }
  }

  const hostname = request.headers.get('host') ?? ''
  const domain = hostname.split(':')[0]

  try {
    const domainMap = await get<Record<string, string>>('domainMap')
    const slug = domainMap?.[domain]
    if (slug) {
      const url = request.nextUrl.clone()
      url.pathname = `/preview/${slug}`
      // Mark the request as coming from the client's own domain so the
      // preview page skips the "this is a preview" banner.
      const headers = new Headers(request.headers)
      headers.set('x-live-domain', '1')
      return NextResponse.rewrite(url, { request: { headers } })
    }
  } catch {
    // Edge Config unavailable (local dev without EDGE_CONFIG) — pass through
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
}
