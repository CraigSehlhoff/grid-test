import React, { useState, useEffect, useRef } from "react";

export default function NewGrid({
  grid,
  p1Pos,
  setGrid,
  setP1Pos,
  handleKeyPress,
  exit,
  tileEnd,
  tileHallway,
  tileCorner,
}) {
  handleKeyPress;
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [p1Pos, grid]);

  useEffect(() => {
    setGrid([
      ["P", "0", "1", "H", "H", "9"],
      ["0", "0", "0", "0", "0", "1"],
      ["0", "7", "H", "9", "0", "0"],
      ["0", "V", "E", "2", "0", "0"],
      ["0", "V", "0", "0", "0", "0"],
      ["0", "1", "H", "H", "9", "0"],
    ]);
  }, [setGrid]);

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`grid-cell type-${cell}`}>
              {cell === "B" && "XXXX XXXX"}
              {cell === "C" && "*"}
              {cell === "E" && <img className="exit" src={exit} />}
              {cell === "H" && (
                <img className="horizontal-wall" src={tileHallway} />
              )}
              {cell === "P" && "(o.0)"}
              {cell === "V" && (
                <img className="vertical-wall" src={tileHallway} />
              )}
              {cell === "0" && " "}
              {cell === "1" && (
                <img className="one-corner-wall" src={tileCorner} />
              )}
              {cell === "2" && <img className="two-end-wall" src={tileEnd} />}
              {cell === "3" && (
                <img className="three-corner-wall" src={tileCorner} />
              )}
              {cell === "4" && <img className="four-end-wall" src={tileEnd} />}
              {cell === "6" && <img className="six-end-wall" src={tileEnd} />}
              {cell === "7" && (
                <img className="seven-corner-wall" src={tileCorner} />
              )}
              {cell === "8" && <img className="eight-end-wall" src={tileEnd} />}
              {cell === "9" && (
                <img className="nine-corner-wall" src={tileCorner} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
