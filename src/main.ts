import "./style.scss";
import config from "./config";
import wall from "./canvas/wall";
import straw from "./canvas/straw";
import { promises } from "./service/image";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

async function bootstrap() {
  await Promise.all(promises);
  straw.render();
  wall.render();
}

bootstrap();
