import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from "lodash";
import config from "../config";
import tank from "../canvas/tank";
import util from "../util";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = tank;
  name: "tank" = "tank";

  render(): void {
    this.move();
    // 增加tank向下移动的概率
    if (_.random(50) === 1) {
      this.direction = directionEnum.bottom;
    }
  }

  protected move() {
    // while (true) {
    let x = this.x;
    let y = this.y;
    const step = config.tank.step;
    switch (this.direction) {
      case directionEnum.top:
        y -= step;
        break;
      case directionEnum.right:
        x += step;
        break;
      case directionEnum.bottom:
        y += step;
        break;
      case directionEnum.left:
        x -= step;
        break;
    }
    if (util.isModelTouch(x, y) || util.isCanvasTouch(x, y)) {
      this.randomDirection();
    } else {
      this.x = x;
      this.y = y;
      // break;
    }
    // }

    super.draw();
  }

  image() {
    let imageName = this.name + _.upperFirst(this.direction);
    return image.get(imageName as keyof typeof config.images)!;
  }
}
