import { createId } from "@paralleldrive/cuid2";
import { commentRepository } from "../repository/comment.repository";
import { commentData } from "../schema/comment.schema";

const createComment = async (commentData: commentData) => {
  const commentCreateRes = await commentRepository.create({
    id: createId(),
    nickname: commentData.nickname,
    content: commentData.content,
    scamId: commentData.scamId,
  });

  console.log(commentCreateRes);

  return commentCreateRes;
};

export const commentService = {
  createComment,
};
