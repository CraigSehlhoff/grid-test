import React, { useEffect, useRef, useState } from "react";
import Game from "./Game";
import { TITLE_TRACK } from "../constants";
import { SettingsModal } from "./SettingsModal";

export default function TitleScreen({ showMessages, setShowMessages }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const audioRef = useRef(null);
  const settingsDialogRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      window.removeEventListener("mousemove", handleMouseMove);
    }, 500);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (musicPlaying) {
      audioRef.current.play();
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
      <h1 className="title-screen-title">THIS IS THE GAME!</h1>
      <button onClick={newGame} className="title-screen-new-game">
        New Game
      </button>
      <button onClick={openSettings} className="title-screen-settings">
        Settings
      </button>
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
