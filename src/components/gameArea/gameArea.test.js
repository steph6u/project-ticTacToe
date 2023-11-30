import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameArea from "./gameArea";

// Winning (and non-winning) conditions
describe("Winning (and non-winning) conditions", () => {
  test("WIN", async () => {
    const squareId = 1;

    // Arrange
    const { container } = render(
      <GameArea player1="Player 1" player2="Player 2" hardReset={false} />
    );

    // WHEN
    // Click on the div
    const gameSquare0 = screen.getByTestId("gameSquare0");
    const gameSquare3 = screen.getByTestId("gameSquare3");
    const gameSquare1 = screen.getByTestId("gameSquare1");
    const gameSquare4 = screen.getByTestId("gameSquare4");
    const gameSquare2 = screen.getByTestId("gameSquare2");
    await act(() => {
      userEvent.click(gameSquare0);
    });
    await act(() => {
      userEvent.click(gameSquare3);
    });
    await act(() => {
      userEvent.click(gameSquare1);
    });
    await act(() => {
      userEvent.click(gameSquare4);
    });
    await act(() => {
      userEvent.click(gameSquare2);
    });

    // Verify nothing there
    expect(screen.queryByText("Reset Game")).toBeVisible();
    // expect(screen.getByText("WINS!")).toBeInTheDocument();
  });
});