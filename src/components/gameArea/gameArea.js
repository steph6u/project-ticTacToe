import { useState, useEffect } from "react";
import "./gameArea.css";

//import components
import GameSquare from "../gameSquare/gameSquare";

function GameArea(props) {
 

  return (
    <div id="gameArea">
     <GameSquare/>
    </div>
  );
}

export default GameArea;
