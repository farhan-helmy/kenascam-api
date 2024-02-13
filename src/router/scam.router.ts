import { Elysia, t } from "elysia";
import { scamController } from "../controller/scam.controller";
import { scamSchema } from "../schema/scam.schema";
import { commentController } from "../controller/comment.controller";
import { commentSchema } from "../schema/comment.schema";

export const scamRouter = new Elysia()
  .get("/", () => scamController.getAllScams())
  .get("/:id", ({ params }) => scamController.getScam(params.id))
  .post(
    "/:id",
    ({ params, query }) =>
      scamController.vote({ action: query.action, id: params.id }),
    {
      query: t.Object({
        action: t.Enum({
          upvote: "upvote",
          downvote: "downvote",
        }),
      }),
    },
  )
  .post(
    "/:id/comment",
    ({ params, body }) =>
      commentController.createComment({
        nickname: body.nickname,
        content: body.content,
        scamId: params.id,
      }),
    {
      body: commentSchema.Comment,
    },
  )
  .post("/", ({ body }) => scamController.createScam(body), {
    body: scamSchema.Scam,
  });
