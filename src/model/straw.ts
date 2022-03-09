import straw from "../canvas/straw";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = straw;
  name: "straw" = "straw";

  render(): void {
    super.draw();
  }
}
