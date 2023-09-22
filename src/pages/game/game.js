import { useState, useEffect } from "react";
import "./game.css";

// importing components
import GameArea from "../../components/gameArea/gameArea";

function Game() {
  return (
    <div className="gamePage">
      <GameArea />
    </div>
  );
}

export default Game;
