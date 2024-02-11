import { Elysia, t } from "elysia";
import { scamController } from "../controller/scam.controller";
import { scamSchema } from "../schema/scam.schema";

export const scamRouter = new Elysia()
    .get('/', () => scamController.getAllScams())
    .get('/:id', ({ params }) => scamController.getScam(params.id))
    .post('/:id', ({ params, query }) => scamController.vote({ action: query.action, id: params.id }), {
        query: t.Object({
            action: t.Enum({
                upvote: 'upvote',
                downvote: 'downvote'
            })
        })
    })
    .post('/', ({ body }) => scamController.createScam(body), {
        body: scamSchema.Scam
    })

