import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock external side-effects so the route runs in isolation.
const create = vi.fn();
const fetchTemplate = vi.fn();
vi.mock("@/sanity/lib/writeClient", () => ({
  writeClient: {
    create: (...args: unknown[]) => create(...args),
    fetch: (...args: unknown[]) => fetchTemplate(...args),
  },
}));
const sendNewOrderNotification = vi.fn();
vi.mock("@/lib/email", () => ({
  sendNewOrderNotification: (...args: unknown[]) => sendNewOrderNotification(...args),
}));

import { POST } from "@/app/api/create-order/route";
import { NextRequest } from "next/server";

type Body = Record<string, unknown>;

// Build a POST request; each call can pin an IP so the per-IP rate limiter
// does not bleed between tests.
function postReq(body: Body, ip = "1.1.1.1"): NextRequest {
  return new NextRequest("http://localhost/api/create-order", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}

const valid = {
  clientName: "Nguyễn Văn A",
  phone: "0909123456",
  businessName: "Tiệm Nail Hoa Mai",
};

beforeEach(() => {
  create.mockReset().mockResolvedValue({ _id: "order_123" });
  fetchTemplate.mockReset().mockResolvedValue(null);
  sendNewOrderNotification.mockReset().mockResolvedValue(undefined);
});

describe("POST /api/create-order", () => {
  it("400 when required fields are missing", async () => {
    const res = await POST(postReq({ clientName: "A" }, "10.0.0.1"));
    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("400 when a field exceeds max length", async () => {
    const res = await POST(postReq({ ...valid, businessName: "x".repeat(121) }, "10.0.0.2"));
    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("400 when the message exceeds 2000 chars", async () => {
    const res = await POST(postReq({ ...valid, message: "x".repeat(2001) }, "10.0.0.3"));
    expect(res.status).toBe(400);
  });

  it("400 when the phone format is invalid", async () => {
    const res = await POST(postReq({ ...valid, phone: "abc" }, "10.0.0.4"));
    expect(res.status).toBe(400);
    expect(create).not.toHaveBeenCalled();
  });

  it("200 and creates the order on valid input", async () => {
    const res = await POST(postReq(valid, "10.0.0.5"));
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.orderId).toBe("order_123");
    expect(create).toHaveBeenCalledOnce();
    // Notification is fired but its failure must not fail the order.
    expect(sendNewOrderNotification).toHaveBeenCalledOnce();
  });

  it("resolves a template slug into a reference when provided", async () => {
    fetchTemplate.mockResolvedValue("tpl_abc");
    await POST(postReq({ ...valid, templateSlug: "thai-spa" }, "10.0.0.6"));
    const doc = create.mock.calls[0][0] as { chosenTemplate?: { _ref: string } };
    expect(doc.chosenTemplate).toEqual({ _type: "reference", _ref: "tpl_abc" });
  });

  it("429 after exceeding the per-IP rate limit (3/hour)", async () => {
    const ip = "10.0.0.99";
    expect((await POST(postReq(valid, ip))).status).toBe(200);
    expect((await POST(postReq(valid, ip))).status).toBe(200);
    expect((await POST(postReq(valid, ip))).status).toBe(200);
    expect((await POST(postReq(valid, ip))).status).toBe(429);
  });
});
