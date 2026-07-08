import { describe, it, expect, afterEach, vi } from "vitest";
import { safeEqual, isAuthorizedAdmin } from "@/lib/adminAuth";

// Build an HTTP Basic Authorization header value for a given password.
function basic(password: string, user = "admin"): string {
  return "Basic " + Buffer.from(`${user}:${password}`).toString("base64");
}

describe("safeEqual", () => {
  it("returns true for identical strings", () => {
    expect(safeEqual("hunter2", "hunter2")).toBe(true);
  });
  it("returns false for different strings of equal length", () => {
    expect(safeEqual("hunter2", "hunterX")).toBe(false);
  });
  it("returns false for different lengths", () => {
    expect(safeEqual("short", "longerpw")).toBe(false);
  });
  it("returns true for two empty strings", () => {
    expect(safeEqual("", "")).toBe(true);
  });
});

describe("isAuthorizedAdmin", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("fails closed when ADMIN_PASSWORD is unset", () => {
    vi.stubEnv("ADMIN_PASSWORD", "");
    expect(isAuthorizedAdmin(basic("anything"))).toBe(false);
  });

  it("rejects a missing header", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");
    expect(isAuthorizedAdmin(null)).toBe(false);
  });

  it("rejects a non-Basic scheme", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");
    expect(isAuthorizedAdmin("Bearer token")).toBe(false);
  });

  it("rejects malformed base64 without throwing", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");
    expect(isAuthorizedAdmin("Basic @@@not-base64@@@")).toBe(false);
  });

  it("rejects a wrong password", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");
    expect(isAuthorizedAdmin(basic("wrong"))).toBe(false);
  });

  it("accepts the correct password", () => {
    vi.stubEnv("ADMIN_PASSWORD", "secret");
    expect(isAuthorizedAdmin(basic("secret"))).toBe(true);
  });
});
