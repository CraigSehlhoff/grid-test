import { world1Tiles, BillySuxTiles } from "./Tiles";

export default function WorldComponent({ grid, billySux, tileSet, poop }) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, cellIndex) => {
            const TileComponent = tileSet[cell];
            return (
              <div key={cellIndex} className={`grid-cell ${cell}`}>
                {/* Render each tile, passing poop as a prop */}
                {typeof TileComponent === "function" ? (
                  <TileComponent poop={poop} />
                ) : (
                  TileComponent
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
