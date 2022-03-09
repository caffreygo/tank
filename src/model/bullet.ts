import bullet from "../canvas/bullet";
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
    switch (this.direction) {
      case directionEnum.top:
        y -= 2;
        break;
      case directionEnum.right:
        x += 2;
        break;
      case directionEnum.bottom:
        y += 2;
        break;
      case directionEnum.left:
        x -= 2;
        break;
    }
    // 子弹碰撞检测
    const touchModel = util.isModelTouch(
      x,
      y,
      config.bullet.width,
      config.bullet.height
    );
    if (util.isCanvasTouch(x, y, config.bullet.width, config.bullet.height)) {
      this.destroy();
    } else if (touchModel) {
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
