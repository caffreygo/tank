import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/tank";
import position from "../service/position";

export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num;
  }

  model(): ModelConstructor {
    return model;
  }

  render() {
    this.createModels();
    this.renderModels();

    setInterval(() => this.renderModels(), config.timeout);
  }

  public renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    super.renderModels();
  }

  protected createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position();
      const model = this.model();
      const instance = new model(pos.x, 0);
      this.models.push(instance);
    }
  }
})("tank");
