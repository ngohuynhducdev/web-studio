import { test, expect } from "@playwright/test";

// Smoke suite: verifies every core page renders with the expected content
// and the order-form flow validates input. No data is written anywhere.

test.describe("homepage", () => {
  test("renders hero, pricing, and nav", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Web Studio/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "pick a template"
    );

    // USD pricing tiers visible
    for (const price of ["$19", "$39", "$59"]) {
      await expect(page.locator("main")).toContainText(price);
    }

    // Primary nav routes
    const nav = page.getByRole("navigation").first();
    for (const href of ["/templates", "/about", "/contact"]) {
      await expect(nav.locator(`a[href="${href}"]`).first()).toBeVisible();
    }
  });
});

test.describe("templates catalog", () => {
  test("lists exactly the 3 spa templates", async ({ page }) => {
    await page.goto("/templates");

    for (const name of [
      "Thai Spa",
      "Herbal Grove Spa",
      "Mist Spring Spa",
    ]) {
      await expect(page.getByRole("heading", { name })).toBeVisible();
    }

    // None of the deleted templates leak back in
    for (const gone of ["Urban Brew", "Sweet Corner", "Tsuki", "Shizen Spa", "Zen Wellness"]) {
      await expect(page.locator("body")).not.toContainText(gone);
    }
  });

  test("template detail page renders its business name", async ({ page }) => {
    await page.goto("/templates/mist-spring-spa");
    await expect(
      page.locator("body")
    ).toContainText("Mist Spring Spa");
  });

  test("deleted template slug returns 404", async ({ page }) => {
    const response = await page.goto("/templates/urban-brew");
    expect(response?.status()).toBe(404);
  });
});

test.describe("contact form", () => {
  test("shows validation errors on empty submit, without navigating", async ({
    page,
  }) => {
    await page.goto("/contact");

    await page.getByRole("button", { name: /send request/i }).click();

    // Client-side validation blocks the submit
    await expect(page.getByText("Please enter your name")).toBeVisible();
    await expect(page.getByText("Please enter a phone number")).toBeVisible();
    await expect(page).toHaveURL(/\/contact/);

    // The message alone is not enough — the field itself has to report as
    // invalid, or a screen reader tabbing back through the form finds nothing
    // wrong with it.
    await expect(page.getByLabel(/full name/i)).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel(/phone/i)).toHaveAttribute("aria-invalid", "true");

    // Clears as soon as the field is edited.
    await page.getByLabel(/full name/i).fill("Jane Doe");
    await expect(page.getByLabel(/full name/i)).not.toHaveAttribute("aria-invalid", "true");
  });

  test("rejects an invalid phone number", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel(/full name/i).fill("Jane Doe");
    await page.getByLabel(/phone/i).fill("12345");
    await page.getByRole("button", { name: /send request/i }).click();

    await expect(page.getByText(/invalid number/i)).toBeVisible();
  });
});

// Reveal wrappers server-render with opacity: 0 and only become visible once
// motion hydrates, so a JS failure blanks the page while every JS-on check
// still passes. Nothing here is visible to the rest of the suite.
test.describe("renders without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  // toBeVisible() is not enough here: Playwright treats opacity: 0 as visible,
  // so it passes against the very bug this guards. Read the computed opacity.
  async function revealOpacities(page: import("@playwright/test").Page) {
    return page
      .locator(".reveal-root")
      .evaluateAll((nodes) => nodes.map((n) => getComputedStyle(n).opacity));
  }

  test("contact page still shows its content and fallback channels", async ({ page }) => {
    await page.goto("/contact");

    const opacities = await revealOpacities(page);
    expect(opacities.length).toBeGreaterThan(0);
    expect(opacities.filter((o) => o !== "1")).toEqual([]);

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // The two ways to reach the studio when the form cannot submit.
    await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
    await expect(page.locator('a[href*="zalo"]').first()).toBeVisible();
  });

  test("homepage still shows its hero", async ({ page }) => {
    await page.goto("/");

    const opacities = await revealOpacities(page);
    expect(opacities.length).toBeGreaterThan(0);
    expect(opacities.filter((o) => o !== "1")).toEqual([]);
  });
});

test.describe("protected and generated routes", () => {
  test("admin dashboard requires auth", async ({ request }) => {
    const response = await request.get("/admin/orders");
    expect(response.status()).toBe(401);
  });

  test("sitemap includes the renamed English routes", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    const xml = await response.text();
    for (const path of ["/templates", "/about", "/contact"]) {
      expect(xml).toContain(path);
    }
  });
});
