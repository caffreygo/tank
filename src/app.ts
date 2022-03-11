import "./style.scss";
import config from "./config";
import wall from "./canvas/wall";
import straw from "./canvas/straw";
import { promises } from "./service/image";
import water from "./canvas/water";
import steel from "./canvas/steel";
import tank from "./canvas/tank";
import bullet from "./canvas/bullet";
import boss from "./canvas/boss";
import player from "./canvas/player";
import { stateEnum } from "./enum/stateEnum";
import audio from "./service/audio";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

export default {
  isStart: false,
  state: stateEnum.normal,
  intervalId: 0,
  bootstrap() {
    app.addEventListener("click", async () => {
      await this.start();
      this.intervalId = setInterval(() => {
        if (tank.models.length === 0) this.state = stateEnum.win;
        if (player.models.length === 0 || boss.models.length === 0) {
          this.state = stateEnum.fail;
        }
        if (this.state !== stateEnum.normal) this.stop();
      });
    });
  },
  async start() {
    if (this.isStart) return;
    this.isStart = true;
    audio.start();

    app.classList.remove("cover");
    await Promise.all(promises);

    straw.render();
    wall.render();
    water.render();
    steel.render();
    tank.render();
    bullet.render();
    boss.render();
    player.render();
  },
  async stop() {
    clearInterval(this.intervalId);
    tank.stop();
    bullet.stop();

    this.text();
  },
  text() {
    const el = document.createElement("canvas");
    el.width = config.canvas.width;
    el.height = config.canvas.height;
    const ctx = el.getContext("2d")!;
    ctx.fillStyle = "red";
    ctx.font = "80px CascadiaMono";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(
      this.state === stateEnum.win ? "大聪明你赢了！" : "是不是没吃饭？",
      config.canvas.width / 2,
      config.canvas.height / 2
    );
    app.appendChild(el);
  },
};
