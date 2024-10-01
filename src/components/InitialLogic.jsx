import React, { useState, useEffect, useRef } from "react";
import SuckIt from "./suckit";
import Movement from "./Movement";
import NewGrid from "./maps/grids/NewGridTest";
import Level1 from "./All-Maps/Level1";
import Level2 from "./All-Maps/Level2";
import Level3 from "./All-Maps/Level3";
import Level4 from "./All-Maps/Level4";
import LevelBillySux from "./All-Maps/LevelBillySux";

export default function GridTest() {
  const initialGrid = [];
  const [grid, setGrid] = useState(initialGrid);
  const [p1Pos, setP1Pos] = useState({ row: 0, col: 0 });
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleKeyPress = (e) => {
    const nextLevel = () => {
      if (currentLevel < 4) {
        setCurrentLevel(currentLevel + 1);
        setP1Pos({ row: 0, col: 0 });
      } else {
        console.log("YOU WIN!!!");
      }
    };
    let { row, col } = p1Pos;
    let newRow = row,
      newCol = col;
    if (e.key === "w") {
      newRow = Math.max(0, row - 1);
    }
    // ***Trying to move diagonally
    // if (e.key === "w" && e.key === "d") {
    //   newRow = Math.max(0, row - 1);
    //   newCol = Math.min(grid[0].length - 1, col + 1);
    // }
    if (e.key === "a") {
      newCol = Math.max(0, col - 1);
    }
    if (e.key === "s") {
      newRow = Math.min(grid.length - 1, row + 1);
    }
    if (e.key === "d") {
      newCol = Math.min(grid[0].length - 1, col + 1);
    }
    if (
      (grid[newRow][newCol] !== "B") &
      (grid[newRow][newCol] !== "H") &
      (grid[newRow][newCol] !== "V") &
      (grid[newRow][newCol] !== "1") &
      (grid[newRow][newCol] !== "2") &
      (grid[newRow][newCol] !== "3") &
      (grid[newRow][newCol] !== "4") &
      (grid[newRow][newCol] !== "5") &
      (grid[newRow][newCol] !== "6") &
      (grid[newRow][newCol] !== "7") &
      (grid[newRow][newCol] !== "8") &
      (grid[newRow][newCol] !== "9")
    ) {
      const updatedGrid = grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === newRow && colIndex === newCol) return "P";
          if (rowIndex === p1Pos.row && colIndex === p1Pos.col) return "0";
          return cell;
        })
      );
      setGrid(updatedGrid);
      setP1Pos({ row: newRow, col: newCol });
      if (grid[newRow][newCol] === "E") {
        nextLevel();
      }
    }
  };

  const exit = "/images/stairs_down.png";
  const tileEnd = "/images/tile-end.png";
  const tileCorner = "/images/tile-Corner.png";
  const tileHallway = "/images/tile-hallway.png";

  return (
    <div>
      {currentLevel === 1 && (
        <Level1
          grid={grid}
          setGrid={setGrid}
          p1Pos={p1Pos}
          setP1Pos={setP1Pos}
          handleKeyPress={handleKeyPress}
          exit={exit}
          tileEnd={tileEnd}
          tileCorner={tileCorner}
          tileHallway={tileHallway}
        />
      )}
      {currentLevel === 2 && (
        <Level2
          grid={grid}
          setGrid={setGrid}
          p1Pos={p1Pos}
          setP1Pos={setP1Pos}
          handleKeyPress={handleKeyPress}
          exit={exit}
          tileEnd={tileEnd}
          tileCorner={tileCorner}
          tileHallway={tileHallway}
        />
      )}
      {currentLevel === 3 && (
        <Level3
          grid={grid}
          setGrid={setGrid}
          p1Pos={p1Pos}
          setP1Pos={setP1Pos}
          handleKeyPress={handleKeyPress}
          exit={exit}
          tileEnd={tileEnd}
          tileCorner={tileCorner}
          tileHallway={tileHallway}
        />
      )}
      {currentLevel === 4 && (
        <Level4
          grid={grid}
          setGrid={setGrid}
          p1Pos={p1Pos}
          setP1Pos={setP1Pos}
          handleKeyPress={handleKeyPress}
          exit={exit}
          tileEnd={tileEnd}
          tileCorner={tileCorner}
          tileHallway={tileHallway}
        />
      )}
    </div>
  );
}

// hey man...alright youve got a lot on your plate...lets see what youre currently doing
// -styling the maps... its a weird call...and seems kind of complicated for no reason...maybe rethink this?
// -making more maps...i mean at this point yeah...you have to make more than the initial 3
// -multiplayer? HOW???
// -fun factor...right now there really is NONE so maybe think of making it fun...and how?
// -is there a way to make traps/actual puzzles?
// -can you make enemies? and if so would you have to make the grids/maps bigger?
// -custom character somehow? or atleast a choice?
// -also have to think how to put this on mobile...the React nipple thing actually almost makes sense but then you have to change all inputs eventually (not that hard?)
// -oh and theres totally alot more...but lets start with these things...also dont get too stressed because youve already done much more than you thought you could by yourself
// -youre doing it man...keep it up and dont give up, please
