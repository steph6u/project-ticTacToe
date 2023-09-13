import { useState, useEffect } from "react";
import "./gameArea.css";

//import components
import GameSquare from "../gameSquare/gameSquare";

function GameArea({ player1, player2, hardReset }) {
  const [turn, setTurn] = useState(true);
  const [grid, setGrid] = useState([
    { id: 0, owner: null },
    { id: 1, owner: null },
    { id: 2, owner: null },
    { id: 3, owner: null },
    { id: 4, owner: null },
    { id: 5, owner: null },
    { id: 6, owner: null },
    { id: 7, owner: null },
    { id: 8, owner: null },
  ]);
  const [winner, setWinner] = useState(null);
  const [reset, setReset] = useState(true);

  const changeTurn = () => {
    setTurn(!turn);
  };
  const markSquare = ({ id, owner }) => {
    const data = { id, owner };

    const newGrid = grid.map((square) => {
      if (square.id === id) {
        return data;
      }
      return square;
    });

    setGrid(newGrid);
  };

  const checkWin = () => {
    if (
      (grid[0].owner &&
        grid[0].owner === grid[1].owner &&
        grid[1].owner === grid[2].owner) ||
      (grid[3].owner &&
        grid[3].owner === grid[4].owner &&
        grid[4].owner === grid[5].owner) ||
      (grid[6].owner &&
        grid[6].owner === grid[7].owner &&
        grid[7].owner === grid[8].owner) ||
      (grid[0].owner &&
        grid[0].owner === grid[3].owner &&
        grid[3].owner === grid[6].owner) ||
      (grid[1].owner &&
        grid[1].owner === grid[4].owner &&
        grid[4].owner === grid[7].owner) ||
      (grid[2].owner &&
        grid[2].owner === grid[5].owner &&
        grid[5].owner === grid[8].owner) ||
      (grid[0].owner &&
        grid[0].owner === grid[4].owner &&
        grid[4].owner === grid[8].owner) ||
      (grid[2].owner &&
        grid[2].owner === grid[4].owner &&
        grid[4].owner === grid[6].owner)
    ) {
      console.log("someone won", turn);
      if (turn) {
        setWinner(2);
      } else {
        setWinner(1);
      }
    } else {
      let tieCheck = 0;
      grid.forEach((square) => {
        if (square.owner) {
          tieCheck += 1;
        }
      });
      if (tieCheck === grid.length) {
        setWinner(3);
      }
    }
  };

  useEffect(() => {
    checkWin();
  }, [grid]);

  const softReset = () => {
    setGrid([
      { id: 0, owner: null },
      { id: 1, owner: null },
      { id: 2, owner: null },
      { id: 3, owner: null },
      { id: 4, owner: null },
      { id: 5, owner: null },
      { id: 6, owner: null },
      { id: 7, owner: null },
      { id: 8, owner: null },
    ]);
    setWinner(null);
    setTurn(true);
    setReset(!reset);
  };

  const fullReset = () => {
    softReset();
    hardReset();
  };

  return (
    <div id="gameArea">
      <h3>GAME ON!</h3>
      <br />
      {!winner ? (
        <h4>{turn ? player1 : player2}'s turn</h4>
      ) : winner === 3 ? (
        <h4>TIE GAME</h4>
      ) : (
        <h4>{winner === 1 ? player1 : player2} WINS!</h4>
      )}
      <div className="gameBoard">
        {grid.map((square) => {
          return (
            <GameSquare
              id={square.id}
              key={square.id}
              changeTurn={changeTurn}
              turn={turn}
              markSquare={markSquare}
              winner={winner}
              reset={reset}
            />
          );
        })}
      </div>
      <br />
      {winner ? (
        <div>
          <button className="hardReset custom-btn" onClick={softReset}>
            Play another Round?
          </button>
          <button className="softReset custom-btn" onClick={fullReset}>
            Reset Game
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GameArea;
