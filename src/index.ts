import { Elysia } from "elysia";
import { scamRouter } from "./router/scam.router";

const app = new Elysia()
  .group('/scam', (app) =>
    app.use(scamRouter)
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
