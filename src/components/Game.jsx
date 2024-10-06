import { useState, useEffect, useRef } from "react";
import WorldComponent from "./WorldComponent";
import { levels, stepsForWorlds } from "../levels";
import { Text } from "./Text";
import { toast } from "sonner";
import { useMovement } from "../hooks/useMovement";
import { useMessages } from "../hooks/useMessages";
import { useSounds } from "../hooks/useSounds";
import { SettingsModal } from "./SettingsModal";

// import { world1Levels } from "./Levels/World1";
// import { world2Levels } from "./Levels/world2";

export default function Game({
  showMessages,
  setShowMessages,
  soundEffects,
  setSoundEffects,
}) {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [grid, setGrid] = useState(levels[currentLevelIndex].grid);
  const [p1Pos, setP1Pos] = useState({ row: 0, col: 0 });
  const [score, setScore] = useState(0);
  const [startingScore, setStartingScore] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [steps, setSteps] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [winState, setWinState] = useState(false);
  const [poop, setPoop] = useState(false);

  const gameOverDialogRef = useRef(null);
  const settingsDialogRef = useRef(null);
  const winStateDialogRef = useRef(null);
  const {
    playCoinSound,
    playKeySound,
    playLevelCompleteSound,
    playStepSound,
    playUnlockDoorSound,
  } = useSounds(soundEffects);

  const openSettings = () => {
    settingsDialogRef?.current?.showModal();
  };

  const closeSettings = () => {
    settingsDialogRef?.current?.close();
  };

  let showInventory =
    (currentLevelIndex >= 5 && currentLevelIndex <= 9) ||
    currentLevelIndex >= 15;

  const currentLevel = levels[currentLevelIndex];
  const currentWorldSteps = stepsForWorlds[currentLevel.world];

  useEffect(() => {
    if (steps > currentWorldSteps) {
      setGameOver(true);
      setP1Pos({ row: 0, col: 0 });
      setShowSteps(true);
      setScore(startingScore);
    }
  }, [currentLevel.world, steps, startingScore]);

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
    if (gameOver) {
      if (gameOverDialogRef.current) {
        gameOverDialogRef.current.showModal();
      }
      return;
    }
  }, [gameOver]);

  const worldStartLevels = {
    1: 0,
    2: 5,
    3: 10,
    4: 15,
  };

  useEffect(() => {
    const currentWorldStartLevel = worldStartLevels[currentLevel.world];
    if (currentLevelIndex === currentWorldStartLevel) {
      setStartingScore(score);
    }
  }, [currentLevelIndex, currentLevel.world]);

  useEffect(() => {
    if (
      currentLevelIndex === 5 ||
      currentLevelIndex === 10 ||
      currentLevelIndex === 15
    )
      setSteps(0);
  }, [currentLevelIndex]);

  const finalExitPos = { row: 0, col: 2 };
  //win state
  useEffect(() => {
    if (
      currentLevelIndex === 19 &&
      p1Pos.row === finalExitPos.row &&
      p1Pos.col === finalExitPos.col
    ) {
      setWinState(true);
      winStateDialogRef.current.showModal();
      if (winStateDialogRef.current) {
        return;
      }
    }
  }, [p1Pos.row, p1Pos.col, currentLevelIndex]);

  //hook for all movement
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
    playCoinSound,
    playKeySound,
    playUnlockDoorSound,
    playStepSound,
    playLevelCompleteSound,
  });

  //hook for text to be displayed
  useMessages({
    score,
    currentLevelIndex,
    showMessages,
  });

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <h1>Loading next level...</h1>
        </div>
      ) : (
        <div className="level-grid-container">
          <h1 style={{ color: "white" }}>Level: {currentLevel.name}</h1>
          <button className="game-settings-button" onClick={openSettings}>
            Settings
          </button>
          <WorldComponent
            tileSet={currentLevel.tileSet}
            grid={grid}
            poop={poop}
          />
          {showInventory && (
            <p className="inventory">
              Inventory:{" "}
              {inventory?.map((inv, index) => (
                <img src={inv.image} key={(inv.id, index)} />
              ))}
            </p>
          )}
          {score > 0 && <div className="score">Score: {score}</div>}
          {showSteps && (
            <div className="show-steps">
              Steps Remaining: {currentWorldSteps - steps}
            </div>
          )}

          <dialog ref={gameOverDialogRef} className="gameover-dialog">
            <div className="gameover-container">
              <h2 className="gameover-title">Game Over</h2>
              <p>
                Oh...wait...did I forget to mention that you have a set number
                of steps per world?
              </p>
              <p>...because thats pretty important...</p>
              <button
                className="gameover-button"
                onClick={() => {
                  const currentWorldStartLevel =
                    worldStartLevels[currentLevel.world];
                  setGameOver(false);
                  setCurrentLevelIndex(currentWorldStartLevel);
                  setSteps(0);
                  setInventory([]);
                  setGrid(levels[currentWorldStartLevel].grid);
                  setScore(startingScore);
                  gameOverDialogRef.current.close();
                }}
              >
                Restart World?
              </button>
            </div>
          </dialog>

          <dialog
            ref={winStateDialogRef}
            className="winning-dialog-main"
            onClose={() => setWinState(false)}
          >
            <div>
              <h1 className="winning-win">YOU WIN!!!</h1>
              <h2 className="winning-congrats">CONGRATULATIONS!!!</h2>
              <p>You collected: {score} out of 81 coins!</p>
              {score === 81 && <h3>You unlocked a new skin!!!</h3>}
              {score === 81 ? (
                <button
                  className="winning-button"
                  onClick={() => {
                    setCurrentLevelIndex(0);
                    setGrid(levels[0].grid);
                    setP1Pos({ row: 0, col: 0 });
                    setScore(0);
                    setSteps(0);
                    setInventory([]);
                    setPoop(true);
                    winStateDialogRef.current.close();
                  }}
                >
                  You've Earned this!!!
                </button>
              ) : (
                <button
                  className="winning-button"
                  onClick={() => {
                    setCurrentLevelIndex(0);
                    setGrid(levels[0].grid);
                    setP1Pos({ row: 0, col: 0 });
                    setScore(0);
                    setSteps(0);
                    setInventory([]);
                    winStateDialogRef.current.close();
                  }}
                >
                  Play again?
                </button>
              )}
            </div>
          </dialog>

          <SettingsModal
            closeSettings={closeSettings}
            ref={settingsDialogRef}
            showMessages={showMessages}
            setShowMessages={setShowMessages}
            soundEffects={soundEffects}
            setSoundEffects={setSoundEffects}
          />
        </div>
      )}
    </>
  );
}

//well...here we are...home stretch kinda lets just map out what else has to be done...
//essential things
//music has to be added per world...this could be easy?
//also check the music vs sound effect volume levels...does it work?
//-styling! (this wont be as bad as you think)
//-figure out rune/dusk
//-figure out MOBILE!!!

//youve got this dude...lets wrap this shit up today!!!
