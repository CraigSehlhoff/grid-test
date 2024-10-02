import { useState, useEffect } from "react";
import World1Component from "./World1";
import World2Component from "./World2";
import { levels } from "../levels";

export default function GridTest() {
  const [grid, setGrid] = useState(levels[0].grid);
  const [p1Pos, setP1Pos] = useState({ row: 0, col: 0 });
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [inventory, setInventory] = useState([]);

  let World1 = true;
  let World2 = false;
  const currentLevel = levels[currentLevelIndex];

  const nextLevel = () => {
    setInventory([]);
    if (currentLevelIndex < 9) {
      const newLevel = currentLevelIndex + 1;
      setCurrentLevelIndex(newLevel);
      setGrid(levels[newLevel].grid);
      setP1Pos({ row: 0, col: 0 });
    } else {
      console.log("YOU WIN!!!");
    }
  };

  if (currentLevelIndex >= 5) {
    World1 = false;
    World2 = true;
  }

  const handleKeyPress = (e) => {
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
    const newCell = grid[newRow][newCol];
    if (
      (newCell !== "B") &
        (newCell !== "H") &
        (newCell !== "L") &
        (newCell !== "V") &
        (newCell !== "1") &
        (newCell !== "2") &
        (newCell !== "3") &
        (newCell !== "4") &
        (newCell !== "5") &
        (newCell !== "6") &
        (newCell !== "7") &
        (newCell !== "8") &
        (newCell !== "9") ||
      (newCell === "L" && inventory.includes("key"))
    ) {
      const updatedGrid = grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === newRow && colIndex === newCol) return "P";
          if (rowIndex === p1Pos.row && colIndex === p1Pos.col) return "0";
          return cell;
        })
      );
      if (newCell === "C") {
        setscore(score + 1);
      }
      if (newCell === "K") {
        setInventory((prevInventory) => [...prevInventory, "key"]);
      }
      if (newCell === "L" && inventory.includes("key")) {
        setInventory((prevInventory) => {
          let i = prevInventory.indexOf("key");
          if (i > -1) {
            return [
              ...prevInventory.slice(0, i),
              ...prevInventory.slice(i + 1),
            ];
          }
          return prevInventory;
        });
      }

      setGrid(updatedGrid);

      setP1Pos({ row: newRow, col: newCol });
      if (grid[newRow][newCol] === "E") {
        nextLevel();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [p1Pos, grid]);

  return (
    <>
      <div className="level-grid-container">
        <h1 style={{ color: "white" }}>Level: {currentLevel.name}</h1>
        {World1 && (
          <World1Component
            grid={grid}
            // billySux={!!currentLevel?.billySux}
          />
        )}
        ;{World2 && <World2Component grid={grid} />}
        {World2 && <p className="inventory">Inventory: {inventory} </p>}
        {score > 0 && <div className="score">Score: {score}</div>}
      </div>
    </>
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
