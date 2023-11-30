// @ts-check
const { test, expect } = require("@playwright/test");

// Completing name input starts game
test.describe("Game Readiness", () => {
  test("Completing name input starts game", async ({ page }) => {
    await page.goto("/");

    // Verify Player 1 input is visible
    const player1Input = page.getByTestId("player1name");
    // Fill Player 1 input
    await player1Input.fill("Player 1");

    // Verify Player 1 submit button visible
    const player1SubmitButton = page.getByTestId("player1btn");
    // Press Player 1 submit button
    await player1SubmitButton.click();

    // Verify Player 2 input is visible
    const player2Input = page.getByTestId("player2name");
    // Fill Player 2 input
    await player2Input.fill("Player 2");

    // Verify Player 2 submit button visible
    const player2SubmitButton = page.getByTestId("player2btn");
    // Press Player 2 submit button
    await player2SubmitButton.click();

    // Expect ready text
    await expect(page.getByText("Both Players Ready!")).toBeVisible();
  });
});