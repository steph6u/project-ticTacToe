import "./gameSquare.css";
import { useState, useEffect } from "react";

function GameSquare({ id, changeTurn, turn, markSquare, winner, reset }) {
  const [owner, setOwner] = useState(null);

  useEffect(()=>{
    setOwner(null)
  },[reset])

  const handleClick = () => {
    if (!owner && !winner) {
      console.log(`${id} has been clicked!`, turn);
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
