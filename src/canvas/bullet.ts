import canvasAbstract from "./canvasAbstract";
import model from "../model/bullet";
import tank from "./tank";
import bullet from "../model/bullet";
import audio from "../service/audio";

export default new (class extends canvasAbstract implements ICanvas {
  intervalId = 0;

  num(): number {
    return 0;
  }

  model(): BulletModelConstructor {
    return model;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  render() {
    this.intervalId = setInterval(() => {
      this.createBullet();
      this.renderModels();
    }, 30);
  }

  createBullet() {
    tank.models.forEach((tank) => {
      const isExists = this.models.some((m) => m.tank === tank);
      if (!isExists) {
        this.models.push(new bullet(tank));
      }
    });
  }

  addPlayerBullet(player: IModel) {
    this.models.push(new bullet(player));
    audio.fire();
  }
})("bullet");
