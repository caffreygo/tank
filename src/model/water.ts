import water from "../canvas/water";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = water;
  name: "water" = "water";

  render(): void {
    super.draw();
  }

  image(): HTMLImageElement {
    return image.get(this.name)!;
  }
}
