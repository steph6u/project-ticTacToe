import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameArea from "./gameArea";

describe("Winning conditions", () => {
  test("Horizontal line", async () => {
    // Given empty TTT board and start of game
    const { container } = render(<GameArea player1="A" player2="B" />);

    // When X marks a horizontal line before O
    const square0 = container.querySelector(`#square0`);
    const square1 = container.querySelector(`#square1`);
    const square3 = container.querySelector(`#square3`);
    const square4 = container.querySelector(`#square4`);
    const square6 = container.querySelector(`#square6`);

    // X clicks Square 0
    await act(() => {
      userEvent.click(square0);
    });

    // O clicks Square 1
    await act(() => {
      userEvent.click(square1);
    });

    // X clicks Square 3
    await act(() => {
      userEvent.click(square3);
    });

    // O clicks Square 4
    await act(() => {
      userEvent.click(square4);
    });

    // X clicks Square 6
    await act(() => {
      userEvent.click(square6);
    });

    // Then X wins
    expect(screen.getByText("A WINS!")).toBeVisible();
  });
});
