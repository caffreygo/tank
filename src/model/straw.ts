import { image } from "../service/image";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  name: "straw" = "straw";

  render(): void {
    super.draw();
  }

  image(): HTMLImageElement {
    return image.get(this.name)!;
  }
}
