import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/wall";

class wall extends canvasAbstract {
  constructor() {
    super();
    super.createModels(config.wall.num, model);
  }
  render() {
    super.renderModels();
  }
}

export default new wall();
