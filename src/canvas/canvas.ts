import config from "../config"

export default abstract class canvasAbstract {
  constructor(
    protected app = document.querySelector<HTMLDivElement>("#app")!,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!
  ) {
    el.width = config.canvas.width;
    el.height = config.canvas.height;

    canvas.fillStyle = "#16a085";
    canvas.fillRect(0, 0, 500, 500);
    app.insertAdjacentElement("afterbegin", el);
  }
}
