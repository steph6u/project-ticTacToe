// @ts-check
const { test, expect } = require("@playwright/test");

// Completing name input starts game
test.describe("Game Reset", () => {
  test("Reset Game brings back to names", async ({ page }) => {
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

    const gameSquare0 = page.getByTestId("gameSquare0");
    const gameSquare3 = page.getByTestId("gameSquare3");
    const gameSquare1 = page.getByTestId("gameSquare1");
    const gameSquare4 = page.getByTestId("gameSquare4");
    const gameSquare2 = page.getByTestId("gameSquare2");
    await gameSquare0.click();
    await gameSquare3.click();
    await gameSquare1.click();
    await gameSquare4.click();
    await gameSquare2.click();
   
    const resetBtn = page.getByTestId("reset-btn");
    await resetBtn.click();

    // Expect ready text
    await expect(page.getByTestId("player1name")).toBeVisible();
  });
});