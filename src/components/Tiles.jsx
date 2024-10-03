import {
  EXIT_ASSET,
  TILE_HALLWAY_ASSET,
  TILE_CORNER_ASSET,
  TILE_END_ASSET,
  TILE_KEY_ASSET,
  TILE_DOOR_LOCKED,
  COIN,
  RED_BUTTON_UP,
  RED_BUTTON_DOWN,
  RED_BLOCK,
} from "../constants";

export const world1Tiles = {
  C: (
    <div className="world one-C">
      <img className="coin" src={COIN} />
    </div>
  ),
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
  C: (
    <div className="world two-C">
      <img className="coin" src={COIN} />
    </div>
  ),
  E: <img className="exit" src={EXIT_ASSET} />,
  H: <img className="horizontal wall" src={TILE_HALLWAY_ASSET} />,
  K: (
    <div className="world two-key">
      <img className="key" src={TILE_KEY_ASSET} />
    </div>
  ),
  L: <img className="world door-locked" src={TILE_DOOR_LOCKED} />,
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

export const world3Tiles = {
  B: <img className="red-block" src={RED_BLOCK} />,
  C: <div className="world two-C">*</div>,
  D: <img className="button red down" src={RED_BUTTON_DOWN} />,
  E: <img className="exit" src={EXIT_ASSET} />,
  H: <img className="horizontal wall" src={TILE_HALLWAY_ASSET} />,
  K: (
    <div className="world two-key">
      <img className="key" src={TILE_KEY_ASSET} />
    </div>
  ),
  L: <img className="world door-locked" src={TILE_DOOR_LOCKED} />,
  P: <div className="world two-P">(0.o)</div>,
  U: <img className="button red up" src={RED_BUTTON_UP} />,
  V: <img className="vertical wall" src={TILE_HALLWAY_ASSET} />,
  0: <div className="world three-0"></div>,
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
