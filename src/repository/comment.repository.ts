import { db } from "../db/drizzle.db"
import { InsertComment, comments } from "../db/drizzle.schema"
import { eq } from 'drizzle-orm';

const create = async (comment: InsertComment) => {
    return await db.insert(comments).values(comment).returning()
}

export const commentRepository = {
    create
}