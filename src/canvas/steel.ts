import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/steel";

class steel extends canvasAbstract {
  num(): number {
    return config.steel.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render() {
    super.createModels();
    super.renderModels();
  }
}

export default new steel();
