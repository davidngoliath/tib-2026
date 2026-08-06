import { expect, test } from "@playwright/test";

test.describe("launch smoke", () => {
  test("redirects the root path to English and loads GA in production", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.getByText("Keep Scrolling")).toBeVisible();
    await expect(
      page.locator('script[src*="googletagmanager.com/gtag/js?id=G-P0M4ZMVE47"]'),
    ).toHaveCount(1);
  });

  test("switches locale from English to Spanish", async ({ page }) => {
    await page.goto("/en");

    await page.getByRole("button", { name: /^es$/i }).click();

    await expect(page).toHaveURL(/\/es$/);
    await expect(page.getByText("Sigue desplazándote")).toBeVisible();
  });

  test("opens and closes the registration modal", async ({ page }) => {
    await page.goto("/en");

    await page.getByRole("button", { name: "Register for Brave Camp" }).click();

    const dialog = page.getByRole("dialog", { name: "Registration Closed" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(/check back for 2027 registration/i)).toBeVisible();

    await dialog.getByRole("button", { name: "Close", exact: true }).click();
    await expect(dialog).toBeHidden();
  });

  test("opens and closes the donate modal", async ({ page }) => {
    await page.goto("/en");

    await page.getByRole("button", { name: "Donate" }).first().click();

    const dialog = page.getByRole("dialog", { name: "Donate" });
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('iframe[title="Donate"]')).toBeVisible();

    await dialog.getByRole("button", { name: "Close donation form" }).click();
    await expect(dialog).toBeHidden();
  });

  test("renders the branded 404 page for missing locale routes", async ({ page }) => {
    const response = await page.goto("/en/does-not-exist");

    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page Not Found" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Return Home" })).toBeVisible();
  });
});

test.describe("mobile smoke", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens the mobile menu and navigates to Brave Camp", async ({ page }) => {
    await page.goto("/en");

    await page.getByRole("button", { name: "Open menu" }).click();

    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();

    await dialog.getByRole("link", { name: "Brave Camp" }).click();

    await expect(page).toHaveURL(/\/en\/brave-camp\/about$/);
    await expect(dialog).toHaveClass(/pointer-events-none opacity-0/);
  });
});
