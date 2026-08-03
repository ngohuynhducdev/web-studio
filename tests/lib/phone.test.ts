import { describe, expect, it } from "vitest";
import { isValidPhone, normalizePhone } from "@/lib/phone";

describe("normalizePhone", () => {
  it("strips the separators people actually type", () => {
    expect(normalizePhone("0909 123 456")).toBe("0909123456");
    expect(normalizePhone("0909.123.456")).toBe("0909123456");
    expect(normalizePhone("0909-123-456")).toBe("0909123456");
    expect(normalizePhone("(028) 3822 1234")).toBe("02838221234");
  });

  it("keeps the leading plus", () => {
    expect(normalizePhone("+84 909 123 456")).toBe("+84909123456");
  });
});

describe("isValidPhone", () => {
  it("accepts a Vietnamese mobile number", () => {
    expect(isValidPhone("0909123456")).toBe(true);
    expect(isValidPhone("0909 123 456")).toBe(true);
  });

  // The case the client used to reject while the server accepted it.
  it("accepts the same number written with a country code", () => {
    expect(isValidPhone("+84909123456")).toBe(true);
    expect(isValidPhone("+84 909 123 456")).toBe(true);
    expect(isValidPhone("84909123456")).toBe(true);
  });

  it("accepts a landline", () => {
    expect(isValidPhone("(028) 3822 1234")).toBe(true);
  });

  it("rejects anything too short or too long to be a number", () => {
    expect(isValidPhone("12345")).toBe(false);
    expect(isValidPhone("1234567890123456")).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });

  it("rejects punctuation with no digits behind it", () => {
    expect(isValidPhone("((((((((")).toBe(false);
    expect(isValidPhone("--------")).toBe(false);
  });

  it("rejects letters and a plus that is not leading", () => {
    expect(isValidPhone("0909abc456")).toBe(false);
    expect(isValidPhone("0909+123456")).toBe(false);
  });
});
