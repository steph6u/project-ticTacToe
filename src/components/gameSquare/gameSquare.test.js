import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameSquare from "./gameSquare";

// Game square shows X or O
describe("When clicked, game square displays correct character, either X or O", () => {
  test("X", async () => {
    const squareId = 1;

    // Arrange
    const { container } = render(
      <GameSquare
        id={squareId}
        changeTurn={() => {}}
        turn={true}
        markSquare={() => {}}
        winner={null}
        reset={true}
      />
    );

    // Verify nothing there
    expect(screen.queryByText("X")).toBeNull();

    // Act
    // Click on the div
    const squareDiv = container.querySelector(`#square${squareId}`);
    await act(() => {
      userEvent.click(squareDiv);
    });

    // Assert
    // Assert that the X appears
    expect(screen.getByText("X")).toHaveTextContent("X");
  });

  test("O", async () => {
    const squareId = 1;

    // Arrange
    const { container } = render(
      <GameSquare
        id={squareId}
        changeTurn={() => {}}
        turn={false}
        markSquare={() => {}}
        winner={null}
        reset={true}
      />
    );

    // Verify nothing there
    expect(screen.queryByText("O")).toBeNull();

    // Act
    // Click on the div
    const squareDiv = container.querySelector(`#square${squareId}`);
    await act(() => {
      userEvent.click(squareDiv);
    });

    // Assert
    // Assert that the X appears
    expect(screen.getByText("O")).toHaveTextContent("O");
  });
});