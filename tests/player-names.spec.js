// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Enter player names", () => {
  test("Entering player name displays ready text", async ({ page }) => {
    // Given empty home page with player name inputs
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Tic Tac Toe Game Page" })
    ).toBeVisible();

    // Verify Player 1 input is visible
    const player1Input = page.getByPlaceholder("Input Player 1");
    await expect(player1Input).toBeVisible();

    // Verify Player 1 submit button visible
    const player1SubmitButton = page
      .locator("#player1Form")
      .getByRole("button");
    await expect(player1SubmitButton).toBeVisible();

    // When Player 1 inputs their name and clicks submit
    await player1Input.fill("Foong");
    await player1SubmitButton.click();

    // Then Ready Text appears
    await expect(page.getByText("FOONG READY")).toBeVisible();
  });

  test("Entering both players' names displays game board", async ({ page }) => {
    // Given empty home page with player name inputs
    await page.goto("/");

    // Select inputs and submit buttons
    const player1Input = page.getByPlaceholder("Input Player 1");
    const player2Input = page.getByPlaceholder("Input Player 2");
    const player1SubmitButton = page.getByTestId(
      "player1NameInputSubmitButton"
    );
    const player2SubmitButton = page.getByTestId(
      "player2NameInputSubmitButton"
    );

    // When both players input names and submit
    await player1Input.fill("A");
    await player2Input.fill("B");
    await player1SubmitButton.click();
    await player2SubmitButton.click();

    // Then game board appears
    await expect(page.getByTestId("gameArea")).toBeVisible();
  });
});
