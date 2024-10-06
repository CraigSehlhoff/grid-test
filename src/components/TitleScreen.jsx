import React, { useEffect, useRef, useState } from "react";
import Game from "./Game";
import { TITLE_TRACK } from "../constants";
import { SettingsModal } from "./SettingsModal";

export default function TitleScreen({ showMessages, setShowMessages }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const audioRef = useRef(null);
  const settingsDialogRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen && musicPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
      });
    }
  }, [isModalOpen, musicPlaying]);

  useEffect(() => {
    if (musicPlaying) {
      audioRef.current.play().catch();
    } else {
      audioRef.current.pause();
    }
  }, [musicPlaying]);

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
    <Game
      showMessages={showMessages}
      setShowMessages={setShowMessages}
      soundEffects={soundEffects}
      setSoundEffects={setSoundEffects}
    />
  ) : (
    <div className="title-screen-main-container">
      {isModalOpen && (
        <dialog className="title-screen-dialog" open>
          <p className="title-screen-dialog-text">Welcome to my game!</p>
          <button className="title-screen-dialog-button" onClick={closeModal}>
            Enter
          </button>
        </dialog>
      )}
      <h1 className="title-screen-title">RETRO MAZE RUNNER</h1>
      <h2 className="title-screen-face">(0.o)</h2>
      <button onClick={newGame} className="title-screen-new-game">
        New Game
      </button>
      <button onClick={openSettings} className="title-screen-settings">
        Settings
      </button>
      <h3 className="title-screen-subtitle">
        A grid-based game by: <span className="name">Virtual Sobriety</span>
      </h3>
      <button
        className="title-screen-music-button"
        onClick={() => setMusicPlaying(!musicPlaying)}
      >
        {musicPlaying ? "Mute Music" : "Play Music"}
      </button>
      <audio ref={audioRef} loop>
        <source src={TITLE_TRACK} type="audio/mp3" />
      </audio>
      <SettingsModal
        closeSettings={closeSettings}
        ref={settingsDialogRef}
        showMessages={showMessages}
        setShowMessages={setShowMessages}
        soundEffects={soundEffects}
        setSoundEffects={setSoundEffects}
      />
    </div>
  );
}
