import config from "../config";
import imgUrl from "../static/images/straw/straw.png";

export default abstract class canvasAbstract {
  protected items = [];
  constructor(
    protected app = document.querySelector<HTMLDivElement>("#app")!,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
    this.drawModels();
  }

  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.app.insertAdjacentElement("afterbegin", this.el);
  }

  protected drawModels() {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.onload = () => {
      const position = this.position();
      this.canvas.drawImage(
        img,
        position.x,
        position.y,
        config.model.width,
        config.model.height
      );
    };
  }

  protected position() {
    return {
      x: 60,
      y: 30,
    };
  }
}
