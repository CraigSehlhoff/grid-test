import {
  world1Tiles,
  world2Tiles,
  world3Tiles,
  world4Tiles,
} from "./components/Tiles";

export const levels = [
  {
    name: "1 - 1",
    tileSet: world1Tiles,
    grid: [
      ["P", "2", "E"],
      ["0", "0", "C"],
      ["0", "8", "0"],
    ],
  },
  {
    name: "1 - 2",
    tileSet: world1Tiles,
    grid: [
      ["P", "0", "1", "3"],
      ["0", "0", "0", "0"],
      ["0", "7", "6", "0"],
      ["C", "V", "E", "0"],
    ],
  },
  {
    name: "1 - 3",
    tileSet: world1Tiles,
    grid: [
      ["P", "0", "1", "H", "H", "9"],
      ["0", "0", "0", "0", "0", "1"],
      ["0", "7", "H", "9", "0", "0"],
      ["0", "V", "E", "2", "0", "C"],
      ["0", "V", "0", "0", "0", "0"],
      ["C", "1", "H", "H", "9", "C"],
    ],
  },
  {
    name: "1 - 4",
    tileSet: world1Tiles,
    grid: [
      ["P", "0", "0", "0", "0", "V", "C", "0", "0", "0"],
      ["9", "0", "4", "9", "0", "V", "0", "0", "8", "0"],
      ["V", "0", "0", "V", "0", "2", "0", "7", "3", "0"],
      ["V", "0", "C", "V", "0", "0", "0", "V", "0", "0"],
      ["1", "H", "H", "3", "4", "H", "H", "3", "0", "0"],
      ["0", "0", "0", "E", "8", "C", "0", "0", "0", "0"],
      ["0", "8", "0", "C", "1", "H", "H", "H", "9", "0"],
      ["0", "1", "H", "H", "6", "C", "0", "0", "2", "0"],
      ["0", "0", "0", "0", "0", "0", "8", "0", "0", "0"],
    ],
  },
  // {
  //   name: "Billy S
  //   billySux: true,
  //   grid: [
  //     ["P", "B", "0", "0", "0", "C"],
  //     ["0", "B", "0", "B", "B", "0"],
  //     ["0", "B", "C", "B", "0", "0"],
  //     ["0", "0", "0", "B", "0", "B"],
  //     ["B", "B", "B", "B", "0", "0"],
  //     ["B", "0", "0", "0", "0", "C"],
  //     ["C", "0", "B", "B", "B", "B"],
  //     ["B", "0", "0", "0", "C", "E"],
  //   ],
  // },
  {
    name: "1 - 5",
    tileSet: world1Tiles,
    billySux: false,
    grid: [
      ["P", "V", "E", "0", "0", "0", "0", "0", "0", "1"],
      ["0", "V", "4", "H", "H", "H", "H", "6", "0", "0"],
      ["0", "V", "0", "0", "0", "0", "0", "0", "0", "C"],
      ["0", "V", "0", "4", "H", "H", "H", "H", "H", "H"],
      ["0", "V", "0", "0", "0", "0", "0", "0", "0", "0"],
      ["0", "V", "0", "0", "7", "H", "H", "H", "9", "0"],
      ["0", "V", "C", "C", "V", "C", "C", "C", "V", "0"],
      ["0", "1", "H", "H", "3", "0", "8", "0", "2", "0"],
      ["0", "0", "0", "0", "0", "0", "V", "0", "0", "0"],
    ],
  },
  {
    name: "2 - 1",
    tileSet: world2Tiles,
    grid: [
      ["P", "0", "0", "1"],
      ["0", "0", "K", "0"],
      ["0", "0", "8", "L"],
      ["9", "C", "V", "E"],
    ],
  },
  {
    name: "2 - 2",
    tileSet: world2Tiles,
    grid: [
      ["P", "0", "0", "0"],
      ["0", "7", "9", "L"],
      ["0", "V", "V", "C"],
      ["K", "2", "V", "L"],
      ["0", "K", "V", "E"],
    ],
  },
  {
    name: "2 - 3",
    tileSet: world2Tiles,
    grid: [
      ["P", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "0"],
      ["0", "0", "0", "0", "0", "0", "E"],
    ],
  },
  {
    name: "2 - 4",
    tileSet: world2Tiles,
    grid: [
      ["P", "1", "9", "0", "V", "K", "E"],
      ["0", "7", "3", "0", "V", "0", "4"],
      ["0", "1", "9", "0", "V", "0", "0"],
      ["0", "0", "2", "0", "1", "9", "0"],
      ["0", "0", "0", "0", "7", "3", "0"],
      ["6", "L", "8", "0", "V", "0", "0"],
      ["C", "C", "V", "0", "2", "0", "0"],
      ["C", "C", "V", "0", "0", "0", "8"],
      ["C", "C", "1", "6", "0", "4", "3"],
    ],
  },
  {
    name: "2 - 5",
    tileSet: world2Tiles,
    grid: [
      ["P", "0", "0", "0"],
      ["0", "0", "0", "0"],
      ["0", "0", "0", "0"],
      ["0", "0", "0", "E"],
    ],
  },
  {
    name: "3-1",
    tileSet: world3Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "3-2",
    tileSet: world3Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "3-3",
    tileSet: world3Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "3-4",
    tileSet: world3Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "3-5",
    tileSet: world3Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "4-1",
    tileSet: world4Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "4-2",
    tileSet: world4Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "4-3",
    tileSet: world4Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "4-4",
    tileSet: world4Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
  {
    name: "4-💀",
    tileSet: world4Tiles,
    grid: [
      ["P", "V", "U", "0"],
      ["0", "1", "6", "0"],
      ["0", "0", "0", "0"],
      ["0", "4", "H", "H"],
      ["0", "B", "C", "E"],
    ],
  },
];
