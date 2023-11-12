import { useState, useEffect } from "react";
import "./game.css";

// importing components
import GameArea from "../../components/gameArea/gameArea";

// this component combines the entire app together, getting the names, setting the board etc
function Game() {
  const [player1, setPlayer1] = useState("");
  const [player1Ready, setPlayer1Ready] = useState(false);
  const [player2, setPlayer2] = useState("");
  const [player2Ready, setPlayer2Ready] = useState(false);
  const [gameState, setGameState] = useState("setup");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.id === "player1Form") {
      if (player1 === "") {
        setPlayer1("Player 1");
      }
      setPlayer1Ready(true);
    } else {
      if (player2 === "") {
        setPlayer2("Player 2");
      }
      setPlayer2Ready(true);
    }
  };

  const hardReset = () => {
    setGameState("setup");
    setPlayer1("");
    setPlayer2("");
    setPlayer1Ready(false);
    setPlayer2Ready(false);
  };

  useEffect(() => {
    if (player1Ready && player2Ready) {
      setGameState("play");
    }
  }, [player1Ready, player2Ready]);

  const handleChange = (e) => {
    if (e.target.id === "player1NameInput") {
      setPlayer1(e.target.value);
    } else {
      setPlayer2(e.target.value);
    }
  };

  return (
    <div className="gamePage">
      <h2 id="gameTitle">Tic Tac Toe Game Page!</h2>
      <div id="nameSettingForm">
        <div className="playerContainter">
          {gameState === "setup" ? (
            <h5>Confirm player Names to Begin!</h5>
          ) : (
            <h5>Both Players Ready!</h5>
          )}
          {!player1Ready ? (
            <form
              className="nameInput"
              id="player1Form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="nameTextInput"
                id="player1NameInput"
                type="text"
                value={player1}
                placeholder="Input Player 1 name"
                onChange={(e) => handleChange(e)}
              />
              <input type="submit" value="READY!" className="readyButton" />
            </form>
          ) : (
            <h3>{player1.toUpperCase()} READY!</h3>
          )}
        </div>
        <div className="playerContainter">
          {!player2Ready ? (
            <form
              className="nameInput"
              id="player2Form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="nameTextInput"
                id="player2NameInput"
                type="text"
                value={player2}
                placeholder="Input Player 2 name"
                onChange={(e) => handleChange(e)}
              />
              <input type="submit" value="READY!" className="readyButton" />
            </form>
          ) : (
            <h3>{player2.toUpperCase()} READY!</h3>
          )}
        </div>
      </div>
      <div id="gameArea">
        {gameState !== "setup" ? (
          <GameArea player1={player1} player2={player2} hardReset={hardReset} />
        ) : null}
      </div>
    </div>
  );
}

export default Game;
