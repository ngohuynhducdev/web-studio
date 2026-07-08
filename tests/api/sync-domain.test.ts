import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import crypto from "node:crypto";
import { POST } from "@/app/api/sync-domain/route";

function sign(body: string, secret: string): string {
  return "sha256=" + crypto.createHmac("sha256", secret).update(body).digest("hex");
}

function req(body: string, signature?: string): Request {
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (signature) headers["sanity-webhook-signature"] = signature;
  return new Request("http://localhost/api/sync-domain", { method: "POST", headers, body });
}

const SECRET = "webhook-secret";
const BODY = JSON.stringify({ trigger: "publish" });

beforeEach(() => {
  vi.stubEnv("SANITY_WEBHOOK_SECRET", SECRET);
  vi.stubEnv("NEXT_PUBLIC_SANITY_PROJECT_ID", "proj");
  vi.stubEnv("VERCEL_EDGE_CONFIG_ID", "ecfg");
  vi.stubEnv("VERCEL_API_TOKEN", "vtok");
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("POST /api/sync-domain", () => {
  it("500 when the webhook secret is unset (fails closed)", async () => {
    vi.stubEnv("SANITY_WEBHOOK_SECRET", "");
    const res = await POST(req(BODY, sign(BODY, SECRET)));
    expect(res.status).toBe(500);
  });

  it("401 on an invalid signature", async () => {
    const res = await POST(req(BODY, "sha256=deadbeef"));
    expect(res.status).toBe(401);
  });

  it("401 when the signature header is missing", async () => {
    const res = await POST(req(BODY));
    expect(res.status).toBe(401);
  });

  it("200 and syncs the domain map on a valid signature", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("api.sanity.io")) {
        return {
          json: async () => ({ result: [{ customDomain: "shop.example.com", slug: "abc-123" }] }),
        } as unknown as Response;
      }
      // Vercel Edge Config PATCH
      return { ok: true, text: async () => "" } as unknown as Response;
    });
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(req(BODY, sign(BODY, SECRET)));
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.synced).toBe(1);
    // Two calls: Sanity query + Vercel Edge Config upsert.
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
