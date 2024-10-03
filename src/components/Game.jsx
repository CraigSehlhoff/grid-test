import { useState, useEffect, useRef } from "react";
import WorldComponent from "./WorldComponent";
import { levels } from "../levels";
import { Text } from "./Text";
import { toast } from "sonner";
import { BLOCKING_TILES } from "../constants";
import Settings from "./Settings";

// import { world1Levels } from "./Levels/World1";
// import { world2Levels } from "./Levels/world2";

let keyOne = {
  id: "keyOne",
  image: "/images/tile-Key.png",
};

export default function Game() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [grid, setGrid] = useState(levels[currentLevelIndex].grid);
  const [p1Pos, setP1Pos] = useState({ row: 0, col: 0 });
  const [score, setscore] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [steps, setSteps] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const gameOverDialogRef = useRef(null);
  const settingsDialogRef = useRef(null);

  const openSettings = () => {
    if (settingsDialogRef.current) {
      settingsDialogRef.current.showModal();
    }
  };

  const closeSettings = () => {
    if (settingsDialogRef.current) {
      settingsDialogRef.current.close();
    }
  };

  let World2 = false;

  const currentLevel = levels[currentLevelIndex];

  const nextLevel = () => {
    setInventory([]);
    if (currentLevelIndex < 19) {
      setLoading(true);
      setTimeout(() => {
        const newLevel = currentLevelIndex + 1;
        setCurrentLevelIndex(newLevel);
        setGrid(levels[newLevel].grid);
        setP1Pos({ row: 0, col: 0 });
        setLoading(false);
      }, 400);
    } else {
      console.log("YOU WIN!!!");
    }
  };

  if (currentLevelIndex >= 5) {
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
        if (rowIndex === p1Pos.row && colIndex === p1Pos.col) return "0";
        if (newCell === "U") {
          return cell === "B" ? "0" : cell;
        }
        return cell;
      })
    );

    if (newCell === "C") {
      setscore(score + 1);
    }
    if (newCell === "K") {
      setInventory((prevInventory) => [...prevInventory, keyOne]);
    }

    setGrid(updatedGrid);
    setP1Pos({ row: newRow, col: newCol });

    if (grid[newRow][newCol] === "E") {
      nextLevel();
    }
  };

  // step counter and gameover
  useEffect(() => {
    console.log(steps);
    setSteps((prevSteps) => {
      const newStepCount = prevSteps + 1;
      if (
        (newStepCount >= 158 && currentLevelIndex <= 4) ||
        (newStepCount >= 1000 &&
          currentLevelIndex >= 5 &&
          currentLevelIndex <= 9) ||
        (newStepCount >= 1000 &&
          currentLevelIndex >= 10 &&
          currentLevelIndex <= 14) ||
        (newStepCount >= 1000 &&
          currentLevelIndex >= 15 &&
          currentLevelIndex <= 19)
      ) {
        setGameOver(true);
        setP1Pos({ row: 0, col: 0 });
        setShowSteps(true);
        setscore(0);
        if (gameOverDialogRef.current) {
          gameOverDialogRef.current.showModal();
        }
      }
      return newStepCount;
    });
  }, [p1Pos]);

  useEffect(() => {
    if (currentLevelIndex === 5 || currentLevelIndex === 10) setSteps(1);
  }, [currentLevelIndex]);

  // useEffect(() =>
  // if(showSteps) {
  //   return
  // })

  // all messages
  useEffect(() => {
    if (score === 1) {
      toast(Text.score.initial);
    }
    if (score === 5) {
      toast(Text.score.five);
    }
    if (score === 10) {
      toast(Text.score.ten);
    }
    if (score === 15) {
      toast(Text.score.fifteen);
    }
    if (score === 20) {
      toast(Text.score.twenty);
    }
    if (score === 25) {
      toast(Text.score.twentyfive);
    }
  }, [score]);

  useEffect(() => {
    if (currentLevelIndex === 0) toast(Text.world.initial);
    if (currentLevelIndex === 5) toast(Text.world.World2);
    if (currentLevelIndex === 8) toast(Text.world.World24);
    if (currentLevelIndex === 10) toast(Text.world.World3);
  }, [currentLevelIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [p1Pos, grid]);
  // console.log(text);
  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="level-grid-container">
          <h1 style={{ color: "white" }}>Level: {currentLevel.name}</h1>
          <WorldComponent
            tileSet={currentLevel.tileSet}
            grid={grid}
            // billySux={!!currentLevel?.billySux}
          />
          {World2 && (
            <p className="inventory">
              Inventory:{" "}
              {inventory?.map((inv, index) => (
                <img src={inv.image} key={(inv.id, index)} />
              ))}
            </p>
          )}
          {score > 0 && <div className="score">Score: {score}</div>}
          {showSteps && (
            <div className="show-steps">Steps Remaining: {157 - steps}</div>
          )}
          {gameOver && ( // Game over modal
            <dialog ref={gameOverDialogRef}>
              <h2>Game Over</h2>
              <p>
                Oh...wait...did we forget to mention you have a set number of
                steps per world?
              </p>
              <p>...because thats pretty important...</p>
              <button
                onClick={() => {
                  setGameOver(false);
                  setCurrentLevelIndex(0);
                  setSteps(0);
                  setInventory([]);
                  setGrid(levels[0].grid);
                }}
              >
                Try Again?
              </button>
            </dialog>
          )}
          <button onClick={openSettings}>Settings</button>
          <dialog ref={settingsDialogRef}>
            <Settings closeSettings={closeSettings} />
          </dialog>
        </div>
      )}
    </>
  );
}

// hey man...alright youve got a lot on your plate...lets see what youre currently doing
// -making more maps...i mean at this point yeah...you have to make more than the initial 3
// -multiplayer? HOW???
// -fun factor...right now there really is NONE so maybe think of making it fun...and how?
// -is there a way to make traps/actual puzzles?
// -can you make enemies? and if so would you have to make the grids/maps bigger?
// -custom character somehow? or atleast a choice?
// -also have to think how to put this on mobile...the React nipple thing actually almost makes sense but then you have to change all inputs eventually (not that hard?)
// -oh and theres totally alot more...but lets start with these things...also dont get too stressed because youve already done much more than you thought you could by yourself
// -youre doing it man...keep it up and dont give up, please

// all that up there is good and all but focus on this for right now...lets do these things first
//settings = sounds/music plus find some quick sound bites....like for coins and keys and doors and buttons...maybe stairs...maybe also do a timeout effect in between levels...just like a second or two with a loading screen just to keep it old school
// get world 3 going and figure out switches...maybe work in a second one now that the first is working
// TRY and think on world 4...both switches and buttons...good shit man
// maybe do a max step per level but not say it right away...you already have the steps being logged to the console...now we have to make a fail state that sends you back to the start...maybe not the start of the game just the same world?  make the max steps world based NOT level based...that will give you a bit more play time on the game
// UPDATE THOSE MESSAGES!!!
// figure out how rune/dusk works too

//BEFORE THAT STUFF FIX THE ISSUE WITH THE STEP COUNTER GOING CRAZY WHENEVER YOU GET A GAMEOVER
// SO what we have to do next...make more levels...customize the different worlds...and then update the max steps for each and make sure the step counter changes to match the appropriate levels...OH and you also have to make a winning screen modal...
//maybe also make the title screen into an actual modal instead of a whole component?
