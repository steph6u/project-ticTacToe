import "./gameSquare.css";
import { useState, useEffect } from "react";

function GameSquare({ id, changeTurn, turn, markSquare, winner, reset }) {
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    setOwner(null);
  }, [reset]);
  // this will be used to see if a square has already been taken, and if not set an owner for it. The click will also trigger a turn change (as you can see from the bottom of the function)
  const handleClick = () => {
    if (!owner && !winner) {
      if (turn) {
        markSquare({ id, owner: 1 });
        setOwner("X");
      } else {
        markSquare({ id, owner: 2 });
        setOwner("O");
      }
      changeTurn();
    }
  };

  return (
    <div
      className={`gameSquare square${id}`}
      onClick={handleClick}
      id={`square${id}`}
    >
      <p>{owner ? owner : ""}</p>
    </div>
  );
}

export default GameSquare;
