import { Elysia } from "elysia";
import { scamRouter } from "./router/scam.router";
import { imageRouter } from "./router/image.router";
import { tagRouter } from "./router/tag.router";

const app = new Elysia()
  .get("/", () => "Ok")
  .group("/scam", (app) => app.use(scamRouter))
  .group("/image", (app) => app.use(imageRouter))
  .group("/tag", (app) => app.use(tagRouter))
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
