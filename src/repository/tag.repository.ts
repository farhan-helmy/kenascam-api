import { db } from "../db/drizzle.db"
import { InserTag, tags } from "../db/drizzle.schema"

const getAll = async () => {
    return await db.query.tags.findMany()
}

const create = async (tag: InserTag) => {
    return await db.insert(tags).values(tag).returning()
}

const createMany = async (tagss: InserTag[]) => {
    return await db.insert(tags).values(tagss).returning().onConflictDoNothing()
}

export const tagRepository = {
    create,
    createMany,
    getAll
}