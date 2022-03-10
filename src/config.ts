import straw from "./static/images/straw/straw.png";
import wall from "./static/images/wall/wall.gif";
import water from "./static/images/water/water.gif";
import steel from "./static/images/wall/steels.gif";
import tankTop from "./static/images/tank/top.gif";
import tankLeft from "./static/images/tank/left.gif";
import tankRight from "./static/images/tank/right.gif";
import tankBottom from "./static/images/tank/bottom.gif";
import bullet from "./static/images/bullet/bullet.jpg";

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
    height: 4
  },  
  straw: {
    num: 180,
  },
  wall: {
    num: 40,
  },
  water: {
    num: 20,
  },
  steel: {
    num: 20,
  },
  tank: {
    num: 20,
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
    bullet
  },
};
