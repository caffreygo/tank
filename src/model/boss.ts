import boss from "../canvas/boss";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = boss;
  name: "boss" = "boss";

  render(): void {
    super.draw();
  }
}
