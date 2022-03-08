import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from "lodash";
import config from "../config";

export default class extends modelAbstract implements IModel {
  name: "tank" = "tank";

  render(): void {
    this.move();
  }

  protected move() {
    switch (this.direction) {
      case directionEnum.top:
        this.y--;
        break;
      case directionEnum.right:
        this.x++;
        break;
      case directionEnum.bottom:
        this.y++;
        break;
      case directionEnum.left:
        this.x--;
        break;
    }
    super.draw();
  }

  image() {
    let imageName = this.name + _.upperFirst(this.direction);
    return image.get(imageName as keyof typeof config.images)!;
  }
}
