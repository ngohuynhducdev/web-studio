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
  });

  test("rejects an invalid phone number", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel(/full name/i).fill("Jane Doe");
    await page.getByLabel(/phone/i).fill("12345");
    await page.getByRole("button", { name: /send request/i }).click();

    await expect(page.getByText(/invalid number/i)).toBeVisible();
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
