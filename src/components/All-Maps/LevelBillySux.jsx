import React, { useEffect } from "react";

export default function NewGrid({
  grid,
  p1Pos,
  setGrid,
  setP1Pos,
  handleKeyPress,
  exit,
}) {
  handleKeyPress;
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [p1Pos, grid]);

  useEffect(() => {
    setGrid([
      ["P", "B", "0", "0", "0", "C"],
      ["0", "B", "0", "B", "B", "0"],
      ["0", "B", "C", "B", "0", "0"],
      ["0", "0", "0", "B", "0", "B"],
      ["B", "B", "B", "B", "0", "0"],
      ["B", "0", "0", "0", "0", "C"],
      ["C", "0", "B", "B", "B", "B"],
      ["B", "0", "0", "0", "C", "E"],
    ]);
  }, [setGrid]);
  const Billy = "/images/Screenshot 2024-09-27 at 4.54.49 PM.png";
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`grid-cell type-${cell}`}>
              {cell === "0" && " "}
              {cell === "P" && (
                <img className="player-picture" src={Billy}></img>
              )}
              {cell === "B" && "(.)(.)"}
              {cell === "C" && "<==8"}
              {cell === "E" && <img className="exit" src={exit} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
