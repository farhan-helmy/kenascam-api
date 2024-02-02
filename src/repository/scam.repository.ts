import { db } from "../db/drizzle.db"
import { InsertScam, scams } from "../db/drizzle.schema"
import { eq } from 'drizzle-orm';

const findMany = async () => {
    return await db.query.scams.findMany({
        with: {
            images: true
        }
    })
}

const findFirst = async ({ id }: { id: string }) => {
    return await db.query.scams.findFirst({
        where: eq(scams.id, id),
    })
}

const create = async (scam: InsertScam) => {
    return await db.insert(scams).values(scam).returning()
}

export const scamRepository = {
    findMany,
    findFirst,
    create
}