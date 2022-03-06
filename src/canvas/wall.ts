import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/wall";

class wall extends canvasAbstract {
  num(): number {
    return config.wall.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render() {
    super.createModels();
    super.renderModels();
  }
}

export default new wall();
