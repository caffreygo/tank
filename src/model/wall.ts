import wall from "../canvas/wall";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = wall;
  name: "wall" = "wall";

  render(): void {
    super.draw();
  }
}
