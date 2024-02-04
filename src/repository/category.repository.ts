import { db } from "../db/drizzle.db"
import { InsertCategory, categories } from "../db/drizzle.schema"
import { eq } from 'drizzle-orm';

const create = async (category: InsertCategory) => {
    return await db.insert(categories).values(category).returning()
}

export const categoryRepository = {
    create
}