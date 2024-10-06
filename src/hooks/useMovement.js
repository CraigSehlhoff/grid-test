import { useEffect } from "react";

import { BLOCKING_TILES } from "../constants";

const UP_KEYS = ["w", "ArrowUp"];
const DOWN_KEYS = ["s", "ArrowDown"];
const LEFT_KEYS = ["a", "ArrowLeft"];
const RIGHT_KEYS = ["d", "ArrowRight"];

let keyOne = {
  id: "keyOne",
  image: "/images/tile-Key.png",
};

export function useMovement({
  playerPos,
  setPlayerPos,
  grid,
  setGrid,
  inventory,
  setInventory,
  setScore,
  nextLevel,
  setSteps,
  playCoinSound,
  playKeySound,
  playUnlockDoorSound,
  playStepSound,
  playLevelCompleteSound,
  playFartSound,
  poop,
}) {
  /*
   * Should check if the key thats being pressed is mapped to a specific direction,
   * if it is, lets return what the new position of the player should be.
   */
  const handleKeyPress = (e) => {
    let { row, col } = playerPos;
    let newRow = row;
    let newCol = col;

    if (UP_KEYS.includes(e.key)) {
      newRow = Math.max(0, row - 1);
      poop ? playFartSound() : playStepSound();
    }
    if (LEFT_KEYS.includes(e.key)) {
      newCol = Math.max(0, col - 1);
      poop ? playFartSound() : playStepSound();
    }
    if (RIGHT_KEYS.includes(e.key)) {
      newCol = Math.min(grid[0].length - 1, col + 1);
      poop ? playFartSound() : playStepSound();
    }
    if (DOWN_KEYS.includes(e.key)) {
      newRow = Math.min(grid.length - 1, row + 1);
      poop ? playFartSound() : playStepSound();
    }

    const newCell = grid[newRow][newCol];

    if (BLOCKING_TILES.includes(newCell)) {
      return;
    }

    //? If the cell locked
    if (newCell === "L") {
      const keyIndex = inventory.findIndex((i) => i.id === keyOne.id);
      if (keyIndex === -1) {
        return;
      }

      //? use the key, remove one from inventory, continue with movement
      setInventory((prevInventory) => {
        return [
          ...prevInventory.slice(0, keyIndex),
          ...prevInventory.slice(keyIndex + 1),
        ];
      });
      playUnlockDoorSound();
    }
    // collection and map replacement
    const updatedGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (rowIndex === newRow && colIndex === newCol) return "P";
        if (rowIndex === playerPos.row && colIndex === playerPos.col)
          return "0";
        if (newCell === "R") {
          return cell === "B" ? "0" : cell;
        }
        if (newCell === "Y") {
          return cell === "U" ? "0" : cell;
        }
        return cell;
      })
    );

    if (newCell === "C") {
      setScore((prev) => prev + 1);
      playCoinSound();
    }

    if (newCell === "K") {
      setInventory((prevInventory) => [...prevInventory, keyOne]);
      playKeySound();
    }

    setGrid(updatedGrid);
    setPlayerPos({ row: newRow, col: newCol });

    if (row !== newRow || col !== newCol) {
      setSteps((prev) => prev + 1);
    }

    if (grid[newRow][newCol] === "E") {
      nextLevel();
      playLevelCompleteSound();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [playerPos, grid]);

  return null;
}
