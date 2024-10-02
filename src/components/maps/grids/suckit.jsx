import { useMovement } from "../../../hooks/useMovement";
import NewGrid from "./maps/grids/NewGridTest";

export default function SuckIt({ grid, p1Pos, setGrid, setP1Pos }) {
  let { row, col } = p1Pos;

  function updateGrid(newRow, newCol) {
    if (grid[newRow][newCol] !== "B") {
      const updatedGrid = grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === newRow && colIndex === newCol) return "P";
          if (rowIndex === p1Pos.row && colIndex === p1Pos.col) return "0";
          return cell;
        })
      );
      setGrid(updatedGrid);
      setP1Pos({ row: newRow, col: newCol });
    }
  }

  useMovement({
    moveUp: () => {
      const newRow = Math.max(0, row - 1);
      updateGrid(newRow, col);
    },
    moveLeft: () => {
      const newCol = Math.max(0, col - 1);
      updateGrid(row, newCol);
    },
    moveDown: () => {
      const newRow = Math.min(grid.length - 1, row + 1);
      updateGrid(newRow, col);
    },
    moveRight: () => {
      const newCol = Math.min(grid[0].length - 1, col + 1);
      updateGrid(row, newCol);
    },
  });

  const Billy = "/images/Screenshot 2024-09-27 at 4.54.49 PM.png";

  console.log(
    "🪵 | SuckIt | grid[p1Pos.row][p1Pos.col]:",
    grid[p1Pos.row][p1Pos.col]
  );
  if (grid[p1Pos.row][p1Pos.col] === "E") {
    console.log("SETING NEW MAP");
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
    setP1Pos({ row: 0, col: 0 });
  }

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
              {cell === "E" && "exit"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
