import canvasAbstract from "./canvasAbstract";
import model from "../model/boss";
import config from "../config";

export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }

  model(): ModelConstructor {
    return model;
  }

  render() {
    this.createModels();
    super.renderModels();
  }

  protected createModels() {
    const position = {
      x: config.canvas.width / 2,
      y: config.canvas.height - config.model.height,
    };
    const model = this.model() as ModelConstructor;
    const instance = new model(position.x, position.y);
    this.models.push(instance);
  }
})("boss");
