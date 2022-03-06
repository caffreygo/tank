import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/straw";

class straw extends canvasAbstract {
  num(): number {
    return config.straw.num;
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

export default new straw();
