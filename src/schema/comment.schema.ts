import { Static, t } from "elysia";

const Comment = t.Object({
  nickname: t.String(),
  content: t.String({
    maxLength: 500,
  }),
});

export type commentData = {
  nickname: string;
  content: string;
  scamId: string;
};

export const commentSchema = {
  Comment,
};
