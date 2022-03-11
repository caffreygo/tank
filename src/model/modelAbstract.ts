import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import audio from "../service/audio";
import { image, ImageMapKey } from "../service/image";
export default abstract class modelAbstract {
  abstract name: string;
  abstract canvas: ICanvas;
  abstract render(): void;
  width = config.model.width;
  height = config.model.height;
  direction: directionEnum = directionEnum.top;

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

  image(): HTMLImageElement {
    return image.get(this.name as ImageMapKey)!;
  }

  public destroy() {
    this.canvas.removeModel(this);
    this.canvas.renderModels();
  }

  protected blast(model: IModel) {
    audio.blast();
    Array(...Array(8).keys()).reduce((promise, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image();
          img.src = `/src/static/images/blasts/blast${index}.gif`;
          img.onload = () => {
            this.canvas.ctx.drawImage(
              img,
              model.x,
              model.y,
              model.width,
              model.height
            );
            resolve(promise);
          };
        }, 100);
      });
    }, Promise.resolve());
  }
}
