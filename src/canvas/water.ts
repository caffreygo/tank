import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/water";

class water extends canvasAbstract {
  num(): number {
    return config.water.num;
  }
  model(): ModelConstructor {
    return model;
  }
  constructor() {
    super();
    super.createModels();
  }
  render() {
    super.renderModels();
  }
}

export default new water();
