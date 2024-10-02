import { world2Tiles, BillySuxTiles } from "./Tiles";

export default function World2Component({ grid, billySux }) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`grid-cell type-${cell}`}>
              {world2Tiles[cell]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
