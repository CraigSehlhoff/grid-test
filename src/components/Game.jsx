import { useState, useEffect, useRef } from "react";
import WorldComponent from "./WorldComponent";
import { levels, stepsForWorlds } from "../levels";
import { Text } from "./Text";
import { toast } from "sonner";
import { useMovement } from "../hooks/useMovement";
import { useMessages } from "../hooks/useMessages";

import { SettingsModal } from "./SettingsModal";

// import { world1Levels } from "./Levels/World1";
// import { world2Levels } from "./Levels/world2";

export default function Game() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [grid, setGrid] = useState(levels[currentLevelIndex].grid);
  const [p1Pos, setP1Pos] = useState({ row: 0, col: 0 });
  const [score, setScore] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [steps, setSteps] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  const gameOverDialogRef = useRef(null);
  const settingsDialogRef = useRef(null);

  const openSettings = () => {
    settingsDialogRef?.current?.showModal();
  };

  const closeSettings = () => {
    settingsDialogRef?.current?.close();
  };

  let World2 = currentLevelIndex >= 5;

  const currentLevel = levels[currentLevelIndex];
  const currentWorldSteps = stepsForWorlds[currentLevel.world];

  useEffect(() => {
    if (steps > currentWorldSteps) {
      setGameOver(true);
      setP1Pos({ row: 0, col: 0 });
      setShowSteps(true);
      setScore(0);
    }
  }, [currentLevel.world, steps]);

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

  // step counter and gameover
  useEffect(() => {
    console.log(steps);
    if (gameOver) {
      if (gameOverDialogRef.current) {
        gameOverDialogRef.current.showModal();
      }
      return;
    }
  }, [p1Pos, gameOver]);

  useMovement({
    playerPos: p1Pos,
    setPlayerPos: setP1Pos,
    grid,
    setGrid,
    inventory,
    setInventory,
    setScore,
    nextLevel,
    setSteps,
  });

  useEffect(() => {
    if (currentLevelIndex === 5 || currentLevelIndex === 10) setSteps(1);
  }, [currentLevelIndex]);

  useMessages({
    score,
    currentLevelIndex,
  });

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
          {gameOver && (
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
          <SettingsModal
            closeSettings={closeSettings}
            ref={settingsDialogRef}
          />
        </div>
      )}
    </>
  );
}

//well...here we are...home stretch kinda lets just map out what else has to be done...
//essential things
//-finish making the maps...the 3's with buttons and the 4s with both
//-step counts for each world
//-winning screen
//-messages everywhere
//-styling! (this wont be as bad as you think)
//-figure out rune/dusk
//-figure out MOBILE!!!

//optional
//-character select...or atleast some reward for getting all coins (or most?)
//-other coin rewards
//-setting for turning off the messages
//-sounds/music (not optional?)

//youve got this dude...look at how far this has come...shits crazy
