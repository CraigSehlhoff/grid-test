import { useEffect, useState } from "react";

const RELEVANT_KEYS = ["w", "a", "s", "d"];

export function useMovement({ moveUp, moveDown, moveLeft, moveRight }) {
  const [keys, setKeys] = useState({});

  const handleKeyRelease = (e) => {
    if (RELEVANT_KEYS.includes(e.key)) {
      const newKeys = Object.assign(keys);
      delete newKeys[e.key];
      setKeys(newKeys);
    }
  };

  const handleKeyPress = (e) => {
    if (!RELEVANT_KEYS.includes(e.key)) {
      return;
    }

    const newKeys = Object.assign(keys);
    newKeys[e.key] = true;
    setKeys(newKeys);

    if (keys["w"]) {
      console.log("w");
      moveUp();
    }
    if (keys["a"]) {
      console.log("a");
      moveLeft();
    }
    if (keys["s"]) {
      console.log("s");
      moveDown();
    }
    if (keys["d"]) {
      console.log("d");
      moveRight();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyRelease);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyRelease);
    };
  }, [moveDown, moveDown, moveLeft, moveRight]);

  return null;
}
