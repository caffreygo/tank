import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/straw";

class straw extends canvasAbstract {
  constructor() {
    super();
    super.createModels(config.straw.num, model);
  }
  render() {
    super.renderModels();
  }
}

export default new straw();
