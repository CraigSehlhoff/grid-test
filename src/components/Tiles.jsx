import {
  EXIT_ASSET,
  TILE_HALLWAY_ASSET,
  TILE_CORNER_ASSET,
  TILE_END_ASSET,
  TILE_KEY_ASSET,
} from "../constants";

export const world1Tiles = {
  C: <div className="world one-C">*</div>,
  E: <img className="exit" src={EXIT_ASSET} />,
  H: <img className="horizontal wall" src={TILE_HALLWAY_ASSET} />,
  P: <div className="world one-P">(o.0)</div>,
  V: <img className="vertical wall" src={TILE_HALLWAY_ASSET} />,
  0: <div className="world one-0"> </div>,
  1: <img className="one-corner wall" src={TILE_CORNER_ASSET} />,
  2: <img className="two-end wall" src={TILE_END_ASSET} />,
  3: <img className="three-corner wall" src={TILE_CORNER_ASSET} />,
  4: <img className="four-end wall" src={TILE_END_ASSET} />,
  6: <img className="six-end wall" src={TILE_END_ASSET} />,
  7: <img className="seven-corner wall" src={TILE_CORNER_ASSET} />,
  8: <img className="eight-end wall" src={TILE_END_ASSET} />,
  9: <img className="nine-corner wall" src={TILE_CORNER_ASSET} />,
};

export const world2Tiles = {
  C: <div className="world two-C">*</div>,
  E: <img className="exit" src={EXIT_ASSET} />,
  H: <img className="horizontal wall" src={TILE_HALLWAY_ASSET} />,
  K: (
    <div className="world two-key">
      <img className="key" src={TILE_KEY_ASSET} />
    </div>
  ),
  L: "locked",
  P: <div className="world two-P">(0.o)</div>,
  V: <img className="vertical wall" src={TILE_HALLWAY_ASSET} />,
  0: <div className="world two-0"></div>,
  1: <img className="one-corner wall" src={TILE_CORNER_ASSET} />,
  2: <img className="two-end wall" src={TILE_END_ASSET} />,
  3: <img className="three-corner wall" src={TILE_CORNER_ASSET} />,
  4: <img className="four-end wall" src={TILE_END_ASSET} />,
  6: <img className="six-end wall" src={TILE_END_ASSET} />,
  7: <img className="seven-corner wall" src={TILE_CORNER_ASSET} />,
  8: <img className="eight-end wall" src={TILE_END_ASSET} />,
  9: <img className="nine-corner wall" src={TILE_CORNER_ASSET} />,
};

export const BillySuxTiles = {
  B: "8==> <==8",
  C: "*",
  E: "()()",
  H: <img className="horizontal wall" src={TILE_HALLWAY_ASSET} />,
  P: "8====>",
  V: <img className="vertical wall" src={TILE_HALLWAY_ASSET} />,
  0: (
    <img
      className="player-picture"
      src="./images/Screenshot 2024-09-27 at 4.54.49 PM.png"
    />
  ),
  1: <img className="one-corner wall" src={TILE_CORNER_ASSET} />,
  2: <img className="two-end wall" src={TILE_END_ASSET} />,
  3: <img className="three-corner wall" src={TILE_CORNER_ASSET} />,
  4: <img className="four-end wall" src={TILE_END_ASSET} />,
  6: <img className="six-end wall" src={TILE_END_ASSET} />,
  7: <img className="seven-corner wall" src={TILE_CORNER_ASSET} />,
  8: <img className="eight-end wall" src={TILE_END_ASSET} />,
  9: <img className="nine-corner wall" src={TILE_CORNER_ASSET} />,
};
