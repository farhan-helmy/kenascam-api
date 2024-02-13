import { db } from "../db/drizzle.db";
import { InsertComment, comments } from "../db/drizzle.schema";
import { eq } from "drizzle-orm";

const create = async (comment: InsertComment) => {
  return await db
    .insert(comments)
    .values({
      id: comment.id,
      nickname: comment.nickname,
      content: comment.content,
      scamId: comment.scamId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
    .returning();
};

export const commentRepository = {
  create,
};
