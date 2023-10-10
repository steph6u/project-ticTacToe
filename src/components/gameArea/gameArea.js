import { useState, useEffect } from "react";
import "./gameArea.css";

//import components
import GameSquare from "../gameSquare/gameSquare";

function GameArea({ player1, player2, hardReset }) {
  // we will use state to determin who's turn it is, and ofcourse who OWNS each square
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

  // this function changes the turn after every go
  const changeTurn = () => {
    setTurn(!turn);
  };

  // this function is used to mark the owner of the square, and update the grid state so it can be re-rendered
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


  // this is our win conditions and will be checked after each person has clicked
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid]);

  // this is to just reset the game board
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

  // this full reset will be used to also clear the player names (notice how we get the hardReset function from a prop)
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
