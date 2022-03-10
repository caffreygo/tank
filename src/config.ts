import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankTop from "./static/images/tank/top.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import bullet from "./static/images/bullet/bullet.jpg";
import boss from "./static/images/boss/boss.png";
import playerTop from "./static/images/player/top.gif";
import playerRight from "./static/images/player/right.gif";
import playerBottom from "./static/images/player/bottom.gif";
import playerLeft from "./static/images/player/left.gif";

export default {
  // 坦克图层重新渲染频率: 图层渲染 =>模型渲染 =>坦克移动 =>图片绘制
  timeout: 20,
  canvas: {
    width: 900,
    height: 600,
  },
  model: {
    width: 30,
    height: 30,
  },
  bullet: {
    width: 4,
    height: 4,
    speed: {
      player: 5,
      tank: 3,
    },
  },
  straw: {
    num: 100,
  },
  wall: {
    num: 60,
  },
  water: {
    num: 60,
  },
  steel: {
    num: 20,
  },
  tank: {
    num: 10,
    step: 1,
  },
  player: {
    step: 10,
  },
  images: {
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankLeft,
    tankRight,
    tankBottom,
    bullet,
    boss,
    playerTop,
    playerRight,
    playerBottom,
    playerLeft,
  },
};
