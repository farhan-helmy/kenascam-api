import { createId } from "@paralleldrive/cuid2";
import { db } from "../db/drizzle.db"
import { InsertScam, images, scamToTags, scams } from "../db/drizzle.schema"
import { desc, eq } from 'drizzle-orm';

const findMany = async () => {
    return await db.query.scams.findMany({
        with: {
            images: true,
            comments: true,
            scamToTags: true
        },
        orderBy: [desc(scams.createdAt)]
    })
}

const findFirst = async ({ id }: { id: string }) => {
    return await db.query.scams.findFirst({
        where: eq(scams.id, id),
        with: {
            images: true,
            comments: {
                orderBy: [desc(scams.createdAt)]
            },
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

const remove = async ({ id }: { id: string }) => {
    return await db.delete(scams).where(eq(scams.id, id)).returning()
}

const attachTags = async ({ scamId, tagIds }: { scamId: string, tagIds: string[] }) => {
    return await db.insert(scamToTags).values(tagIds.map(tagId => ({
        scamId,
        tagId
    }))).returning()
}

const attachImages = async ({ id, scamId, fileKeys }: { id: string, scamId: string, fileKeys: string[] }) => {
    return await db.insert(images).values(fileKeys.map(fileKey => ({
        id: createId(),
        url: fileKey,
        scamId
    }))).returning()
}

const upvote = async ({ id }: { id: string }) => {

    const scam = await db.query.scams.findFirst({
        where: eq(scams.id, id),
    })

    if (!scam){
       throw new Error("Scam not found")
    }

    return await db.update(scams).set({
        upvotes: scam.upvotes + 1
    }).where(eq(scams.id, id)).returning()
}

const downvote = async ({ id }: { id: string }) => {

    const scam = await db.query.scams.findFirst({
        where: eq(scams.id, id),
    })

    if (!scam) {
        throw new Error("Scam not found")
    }

    return await db.update(scams).set({
        downvotes: scam.downvotes + 1
    }).where(eq(scams.id, id)).returning()
}

export const scamRepository = {
    findMany,
    findFirst,
    create,
    attachTags,
    attachImages,
    upvote,
    downvote,
    remove
}