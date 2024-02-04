import { Static, t } from "elysia"

const Comment = t.Object({
    nickname: t.String(),
    content: t.String({
        maxLength: 500
    }),
    scamId: t.String()
})

export type commentData = Static<typeof Comment>

export const commentSchema = {
    Comment
}