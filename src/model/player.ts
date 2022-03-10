import player from "../canvas/player";
import config from "../config";
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import bullet from "../canvas/bullet";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = player;
  name: "player" = "player";
  bindEvent = false;

  render(): void {
    super.draw();
    if (this.bindEvent === false) {
      this.bindEvent = true;
      document.addEventListener("keydown", this.move.bind(this));
      document.addEventListener("keydown", this.fire.bind(this));
      document.addEventListener("keydown", this.changeDirection.bind(this));
    }
  }

  changeDirection(event: KeyboardEvent) {
    switch (event.code) {
      case "KeyW":
      case "ArrowUp":
        this.direction = directionEnum.top;
        break;
      case "KeyD":
      case "ArrowRight":
        this.direction = directionEnum.right;
        break;
      case "KeyS":
      case "ArrowDown":
        this.direction = directionEnum.bottom;
        break;
      case "KeyA":
      case "ArrowLeft":
        this.direction = directionEnum.left;
        break;
    }
    this.canvas.renderModels();
  }

  fire(event: KeyboardEvent) {
    if (event.code === "Space") {
      bullet.addPlayerBullet(this);
    }
  }

  move(event: KeyboardEvent) {
    let x = this.x;
    let y = this.y;
    const step = config.player.step;
    switch (event.code) {
      case "KeyW":
      case "ArrowUp":
        y -= step;
        break;
      case "KeyD":
      case "ArrowRight":
        x += step;
        break;
      case "KeyS":
      case "ArrowDown":
        y += step;
        break;
      case "KeyA":
      case "ArrowLeft":
        x -= step;
        break;
    }
    if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y)) {
      return;
    }
    this.x = x;
    this.y = y;
    this.canvas.renderModels();
  }

  image(): HTMLImageElement {
    let imageName = this.name + _.upperFirst(this.direction);
    return image.get(imageName as keyof typeof config.images)!;
  }
}
