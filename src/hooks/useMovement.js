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
    }
    if (LEFT_KEYS.includes(e.key)) {
      newCol = Math.max(0, col - 1);
    }
    if (RIGHT_KEYS.includes(e.key)) {
      newCol = Math.min(grid[0].length - 1, col + 1);
    }
    if (DOWN_KEYS.includes(e.key)) {
      newRow = Math.min(grid.length - 1, row + 1);
    }

    const newCell = grid[newRow][newCol];

    if (BLOCKING_TILES.includes(newCell)) {
      return;
    }

    //? If the cell locked
    if (newCell === "L") {
      if (!inventory.find((i) => i.id === keyOne.id)) {
        //? No proper key - return early and do nothing
        return;
      }

      //? use the key, remove one from inventory, continue with movement
      setInventory((prevInventory) => {
        let i = prevInventory.findIndex((inv) => inv.id === keyOne.id);
        if (i > -1) {
          return [...prevInventory.slice(0, i), ...prevInventory.slice(i + 1)];
        }
        return prevInventory;
      });
    }

    if (newCell === "L" && inventory.includes("key")) {
      setInventory((prevInventory) => {
        let i = prevInventory.indexOf("key");
        if (i > -1) {
          return [...prevInventory.slice(0, i), ...prevInventory.slice(i + 1)];
        }
        return prevInventory;
      });
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
    }
    if (newCell === "K") {
      setInventory((prevInventory) => [...prevInventory, keyOne]);
    }

    setGrid(updatedGrid);
    setPlayerPos({ row: newRow, col: newCol });

    if (row !== newRow || col !== newCol) {
      setSteps((prev) => prev + 1);
    }

    if (grid[newRow][newCol] === "E") {
      nextLevel();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [playerPos, grid]);

  return null;
}
