import config from "../config";
import CanvasAbstract from "./CanvasAbstract";

class Straw extends CanvasAbstract {
  render() {
    super.drawModels(config.straw.num);
  }
}

export default new Straw();
