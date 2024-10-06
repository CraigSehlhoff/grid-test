import React, { useRef } from "react";

import {
  COIN_SOUND,
  KEY_SOUND,
  LEVELCOMPLETE_SOUND,
  STEP_SOUND,
  UNLOCKDOOR_SOUND,
} from "../constants";

export function useSounds(soundEffects) {
  const playSound = (audioFile, volume = 1, playbackRate = 1) => {
    const audio = new Audio(audioFile);
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    audio.play();
  };

  const playCoinSound = () => {
    if (soundEffects) {
      playSound(COIN_SOUND);
    }
  };

  const playKeySound = () => {
    if (soundEffects) {
      playSound(KEY_SOUND, 0.5, 2);
    }
  };

  const playLevelCompleteSound = () => {
    if (soundEffects) {
      playSound(LEVELCOMPLETE_SOUND, 0.7, 1.1);
    }
  };

  const playStepSound = () => {
    if (soundEffects) {
      playSound(STEP_SOUND);
    }
  };

  const playUnlockDoorSound = () => {
    if (soundEffects) {
      playSound(UNLOCKDOOR_SOUND, 1, 2);
    }
  };

  return {
    playCoinSound,
    playKeySound,
    playLevelCompleteSound,
    playStepSound,
    playUnlockDoorSound,
  };
}
