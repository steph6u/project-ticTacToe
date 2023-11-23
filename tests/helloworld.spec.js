// @ts-check
const { test, expect } = require("@playwright/test");

test("Hello World", async ({ page }) => {
  await page.goto("/");
  // Expects page to have a heading with the name of Tic Tac Toe.
  await expect(
    page.getByRole("heading", { name: "Tic Tac Toe Game Page" })
  ).toBeVisible();
});
