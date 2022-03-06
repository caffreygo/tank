import config from "../config";
import { image } from "../service/image";

export default abstract class CanvasAbstract {
  protected items = [];
  abstract render(): void;

  constructor(
    protected app = document.querySelector<HTMLDivElement>("#app")!,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
  }

  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el);
  }

  protected drawModels(num: number) {
    const position = this.position();
    Array(num)
      .fill("")
      .forEach(() => {
        this.canvas.drawImage(
          image.get("straw")!,
          position.x,
          position.y,
          config.model.width,
          config.model.height
        );
      });
  }

  protected position() {
    return {
      x: 60,
      y: 30,
    };
  }
}
