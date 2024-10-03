import { world1Tiles, BillySuxTiles } from "./Tiles";

export default function WorldComponent({ grid, billySux, tileSet }) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={`grid-cell ${cell}`}>
              {billySux ? BillySuxTiles[cell] : tileSet[cell]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
