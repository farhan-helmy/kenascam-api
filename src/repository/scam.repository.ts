import { db } from "../db/drizzle.db"
import { InsertScam, images, scamToTags, scams } from "../db/drizzle.schema"
import { eq } from 'drizzle-orm';

const findMany = async () => {
    return await db.query.scams.findMany({
        with: {
            images: true,
            comments: true,
            scamToTags: true
        }
    })
}

const findFirst = async ({ id }: { id: string }) => {
    return await db.query.scams.findFirst({
        where: eq(scams.id, id),
        with: {
            images: true,
            comments: true,
            scamToTags: true
        }
    })
}

const create = async (scam: InsertScam) => {
    return await db.insert(scams).values({
        id: scam.id,
        name: scam.name,
        description: scam.description,
        isApproved: scam.isApproved,
        platform: scam.platform,
        scammerInfo: scam.scammerInfo,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }).returning()
}

const attachTags = async ({ scamId, tagIds }: { scamId: string, tagIds: string[] }) => {
    return await db.insert(scamToTags).values(tagIds.map(tagId => ({
        scamId,
        tagId
    }))).returning()
}

const attachImages = async ({ id, scamId, fileKeys }: { id: string, scamId: string, fileKeys: string[] }) => {
    return await db.insert(images).values(fileKeys.map(fileKey => ({
        id,
        url: fileKey,
        scamId
    }))).returning()
}

export const scamRepository = {
    findMany,
    findFirst,
    create,
    attachTags,
    attachImages
}