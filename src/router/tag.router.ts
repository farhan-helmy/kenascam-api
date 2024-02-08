import { Elysia } from "elysia";
import { tagController } from "../controller/tag.controller";

export const tagRouter = new Elysia()
    .get('/', () => tagController.getTags())

