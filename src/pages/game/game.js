import { useState, useEffect } from "react";
import "./game.css";

// importing components
import GameArea from "../../components/gameArea/gameArea";

// this component combines the entire app together, getting the names, setting the board etc
function Game() {
  return (
    <div className="gamePage">
      <GameArea />
    </div>
  );
}

export default Game;
