import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from "lodash";
import config from "../config";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";

export default class extends modelAbstract implements IModel {
  name: "tank" = "tank";

  render(): void {
    this.move();
    if (_.random(20) === 1) {
      this.direction = directionEnum.bottom;
    }
  }

  protected move() {
    // while (true) {
    let x = this.x;
    let y = this.y;
    switch (this.direction) {
      case directionEnum.top:
        y--;
        break;
      case directionEnum.right:
        x++;
        break;
      case directionEnum.bottom:
        y++;
        break;
      case directionEnum.left:
        x--;
        break;
    }
    if (this.isTouch(x, y) === true) {
      this.randomDirection();
    } else {
      this.x = x;
      this.y = y;
      // break;
    }
    // }

    super.draw();
  }

  protected isTouch(x: number, y: number) {
    if (
      x === 0 ||
      x + this.width > config.canvas.width ||
      y < 0 ||
      y + this.height > config.canvas.height
    ) {
      return true;
    }
    const models = [...water.models, ...wall.models, ...steel.models];
    return models.some((model) => {
      // model: 障碍物模型； this：坦克
      const state =
        x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height;
      return !state;
    });
  }

  image() {
    let imageName = this.name + _.upperFirst(this.direction);
    return image.get(imageName as keyof typeof config.images)!;
  }
}
