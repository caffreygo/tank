import boss from "../canvas/boss";
import bullet from "../canvas/bullet";
import player from "../canvas/player";
import steel from "../canvas/steel";
import tank from "../canvas/tank";
import wall from "../canvas/wall";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = bullet;
  name: "bullet" = "bullet";

  constructor(public tank: IModel) {
    super(
      tank.x + (config.model.width - config.bullet.width) / 2,
      tank.y + (config.model.height - config.bullet.height) / 2
    );
    this.direction = tank.direction as directionEnum;
  }

  render(): void {
    let x = this.x;
    let y = this.y;
    const step =
      config.bullet.speed[this.tank.name as keyof typeof config.bullet.speed];
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
    // 子弹碰撞检测
    const touchModel = util.isModelTouch(
      x,
      y,
      config.bullet.width,
      config.bullet.height,
      [...wall.models, ...steel.models, ...tank.models, ...boss.models, ...player.models]
    );
    if (util.isCanvasTouch(x, y, config.bullet.width, config.bullet.height)) {
      // canvas图层边缘碰撞检测
      this.destroy();
    } else if (touchModel && touchModel.name !== this.tank.name) {
      this.destroy();
      if (touchModel.name !== "steel") touchModel.destroy();
      this.blast(touchModel);
    } else {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }

  protected draw() {
    this.canvas.ctx.drawImage(
      this.image(),
      this.x,
      this.y,
      config.bullet.width,
      config.bullet.height
    );
  }
}
