import React, { useState, useEffect, useRef } from "react";

export default function Movement({
  grid,
  p1Pos,
  setGrid,
  setP1Pos,
  handleKeyPress,
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

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`grid-cell type-${cell}`}>
              {cell === "0" && " "}
              {cell === "P" && "(o.0)"}
              {cell === "B" && "XXXX XXXX"}
              {cell === "C" && "*"}
              {cell === "E" && "exit "}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
