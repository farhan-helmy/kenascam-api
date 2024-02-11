import { Elysia } from "elysia";
import { tagController } from "../controller/tag.controller";

export const categoryRouter = new Elysia()
    .get('/', () => tagController.getTags())

