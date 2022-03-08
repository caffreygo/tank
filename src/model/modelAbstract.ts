import config from "../config";
import { directionEnum } from "../enum/directionEnum";
export default abstract class modelAbstract {
  protected abstract name: string;
  public abstract canvas: ICanvas;
  abstract render(): void;
  protected abstract image(): HTMLImageElement;
  protected direction: directionEnum = directionEnum.top;
  public width = config.model.width;
  public height = config.model.height;

  constructor(public x: number, public y: number) {
    this.randomDirection();
  }

  // 绘制单个模型的图片
  protected draw() {
    this.canvas.ctx.drawImage(
      this.image(),
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  // 生成随机方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[
      Math.floor(Math.random() * 4)
    ] as directionEnum;
  }
}
