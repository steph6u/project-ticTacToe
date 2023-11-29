import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./game";

describe("Winning conditions", () => {
  test("Horizontal line", async () => {
    // Given starting page with 2 player name inputs
    const { container } = render(<Game />);

    // When we enter a name into Player 1's input
    // Retrieve Player 1's input and submit button
    const player1NameInput = container.querySelector(`#player1NameInput`);
    const player1NameInputSubmitButton = screen.getByTestId(
      "player1NameInputSubmitButton"
    );

    // Input name
    fireEvent.change(player1NameInput, { target: { value: "Foo" } });
    // Click submit
    await act(() => {
      userEvent.click(player1NameInputSubmitButton);
    });

    // Then the first input changes to <name> READY!
    expect(screen.getByText("FOO READY!")).toBeVisible();
  });
});
