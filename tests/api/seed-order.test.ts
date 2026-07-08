import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

// patch().set().commit() chain — hoisted so the mock factory can reference it.
const { patch, set, commit } = vi.hoisted(() => {
  const commit = vi.fn();
  const set = vi.fn(() => ({ commit }));
  const patch = vi.fn(() => ({ set }));
  return { patch, set, commit };
});
vi.mock("@/sanity/lib/writeClient", () => ({
  writeClient: { patch },
}));

// Stub the sections map so we don't import real template components (CSS/fonts).
vi.mock("@/lib/templateRegistry", () => ({
  DEFAULT_SECTIONS_MAP: { "thai-spa": [{ _type: "a" }, { _type: "b" }, { _type: "c" }] },
}));

import { POST as seedPost } from "@/app/api/seed-order/route";
import { POST as adminSeedPost } from "@/app/api/admin/seed-order/route";
import { NextRequest } from "next/server";

function req(headers: Record<string, string>, body: unknown): NextRequest {
  return new NextRequest("http://localhost/api/seed", {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

function basic(password: string): string {
  return "Basic " + Buffer.from(`admin:${password}`).toString("base64");
}

beforeEach(() => {
  commit.mockReset().mockResolvedValue({});
  set.mockClear();
  patch.mockClear();
});
afterEach(() => vi.unstubAllEnvs());

describe("POST /api/seed-order (secret-guarded)", () => {
  beforeEach(() => vi.stubEnv("SEED_SECRET", "s3cr3t"));

  it("401 on wrong secret", async () => {
    const res = await seedPost(req({ "x-seed-secret": "nope" }, { orderId: "o1", templateSlug: "thai-spa" }));
    expect(res.status).toBe(401);
    expect(patch).not.toHaveBeenCalled();
  });

  it("400 when fields are missing", async () => {
    const res = await seedPost(req({ "x-seed-secret": "s3cr3t" }, { orderId: "o1" }));
    expect(res.status).toBe(400);
  });

  it("400 on unknown template slug", async () => {
    const res = await seedPost(req({ "x-seed-secret": "s3cr3t" }, { orderId: "o1", templateSlug: "ghost" }));
    expect(res.status).toBe(400);
    expect(patch).not.toHaveBeenCalled();
  });

  it("200 and patches sections on valid request", async () => {
    const res = await seedPost(req({ "x-seed-secret": "s3cr3t" }, { orderId: "o1", templateSlug: "thai-spa" }));
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.seededSections).toBe(3);
    expect(patch).toHaveBeenCalledWith("o1");
    expect(set).toHaveBeenCalledOnce();
  });
});

describe("POST /api/admin/seed-order (Basic-Auth-guarded)", () => {
  beforeEach(() => vi.stubEnv("ADMIN_PASSWORD", "adminpw"));

  it("401 without auth header", async () => {
    const res = await adminSeedPost(req({}, { orderId: "o1", templateSlug: "thai-spa" }));
    expect(res.status).toBe(401);
    expect(patch).not.toHaveBeenCalled();
  });

  it("401 with wrong password", async () => {
    const res = await adminSeedPost(req({ authorization: basic("wrong") }, { orderId: "o1", templateSlug: "thai-spa" }));
    expect(res.status).toBe(401);
  });

  it("400 with valid auth but missing fields", async () => {
    const res = await adminSeedPost(req({ authorization: basic("adminpw") }, { orderId: "o1" }));
    expect(res.status).toBe(400);
  });

  it("200 with valid auth and valid request", async () => {
    const res = await adminSeedPost(req({ authorization: basic("adminpw") }, { orderId: "o1", templateSlug: "thai-spa" }));
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.seededSections).toBe(3);
    expect(patch).toHaveBeenCalledWith("o1");
  });
});
