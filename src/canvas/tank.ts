import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/tank";
import position from "../service/position";

export default new (class extends canvasAbstract implements ICanvas {
  intervalId = 0;

  num(): number {
    return config.tank.num;
  }

  model(): ModelConstructor {
    return model;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  render() {
    this.createModels();
    super.renderModels();
    // 定时重新渲染坦克图层
    this.intervalId = setInterval(() => super.renderModels(), config.timeout);
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
