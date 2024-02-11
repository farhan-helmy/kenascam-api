import { Elysia } from "elysia";
import { commentController } from "../controller/comment.controller";
import { commentSchema } from "../schema/comment.schema";

export const commentRouter = new Elysia()
    .post('/', ({ body }) => commentController.createComment(body), {
        body: commentSchema.Comment
    })

