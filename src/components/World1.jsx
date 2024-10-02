import { world1Tiles, BillySuxTiles } from "./Tiles";

export default function World1Component({ grid, billySux }) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`grid-cell ${cell}`}>
              {billySux ? BillySuxTiles[cell] : world1Tiles[cell]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
