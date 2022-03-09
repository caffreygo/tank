import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/water";

export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return config.water.num;
  }

  model(): ModelConstructor {
    return model;
  }

  render() {
    super.createModels();
    super.renderModels();
  }
})("water");
