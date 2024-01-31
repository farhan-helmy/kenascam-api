import { Elysia } from "elysia";
import { scamController } from "../controller/scam.controller";
import { scamSchema } from "../schema/scam.schema";

export const scamRouter = new Elysia()
    .post('/', ({ body }) => scamController.createScam(body), {
        body: scamSchema.Scam
    })

