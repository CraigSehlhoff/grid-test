import React, { useEffect, useRef, useState } from "react";
import Game from "./Game";
import { SettingsModal } from "./SettingsModal";

export default function TitleScreen() {
  const [gameStarted, setGameStarted] = useState(false);
  const settingsDialogRef = useRef(null);

  const newGame = () => {
    setGameStarted(true);
  };

  const openSettings = () => {
    settingsDialogRef?.current?.showModal();
  };

  const closeSettings = () => {
    settingsDialogRef?.current?.close();
  };

  return gameStarted ? (
    <Game />
  ) : (
    <div className="title-screen-main-container">
      <h1 className="title-screen-title">THIS IS THE GAME!</h1>
      <button onClick={newGame} className="title-screen-new-game">
        New Game
      </button>
      <button onClick={openSettings} className="title-screen-settings">
        Settings
      </button>
      <SettingsModal closeSettings={closeSettings} ref={settingsDialogRef} />
    </div>
  );
}
