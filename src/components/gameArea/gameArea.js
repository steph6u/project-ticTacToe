import { useState, useEffect } from "react";
import "./gameArea.css";

//import components
import GameSquare from "../gameSquare/gameSquare";

// this components can be used to represent your game area (up do you if you want to use it)
function GameArea(props) {
  return (
    <div id="gameArea">
      <GameSquare />
    </div>
  );
}

export default GameArea;
