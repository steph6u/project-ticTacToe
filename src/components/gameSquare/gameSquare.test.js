import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameSquare from "./gameSquare";

describe("When clicked, game square displays correct character, either X or O", () => {
  test("X", async () => {
    const squareId = 1;

    // Given empty game square and X's turn
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

    // Verify empty square
    expect(screen.queryByText("X")).toBeNull();

    // When we click on the div
    const squareDiv = container.querySelector(`#square${squareId}`);
    await act(() => {
      userEvent.click(squareDiv);
    });

    // Then the X appears
    expect(screen.getByText("X")).toHaveTextContent("X");
  });

  test("O", async () => {
    const squareId = 1;

    // Given empty game square and O's turn
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

    // Verify empty square
    expect(screen.queryByText("O")).toBeNull();

    // When we click on the div
    const squareDiv = container.querySelector(`#square${squareId}`);
    await act(() => {
      userEvent.click(squareDiv);
    });

    // Then the O appears
    expect(screen.getByText("O")).toHaveTextContent("O");
  });
});
