import steel from "../canvas/steel";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = steel;
  name: "steel" = "steel";

  render(): void {
    super.draw();
  }
}
