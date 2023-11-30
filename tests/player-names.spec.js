// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Enter player names", () => {
  test("Enter player name", async ({ page }) => {
    await page.goto("/");

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Tic Tac Toe Game Page" })
    ).toBeVisible();

    // Verify Player 1 input is visible
    const player1Input = page.getByPlaceholder("Input Player 1");
    await expect(player1Input).toBeVisible();

    // Fill Player 1 input
    await player1Input.fill("Foong");

    // Verify Player 1 submit button visible
    const player1SubmitButton = page
      .locator("#player1Form")
      .getByRole("button");
    await expect(player1SubmitButton).toBeVisible();

    // Press Player 1 submit button
    await player1SubmitButton.click();

    // Expect ready text
    await expect(page.getByText("FOONG READY")).toBeVisible();
  });
});