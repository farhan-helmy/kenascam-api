import { createId } from "@paralleldrive/cuid2";
import { InsertScam } from "../db/drizzle.schema";
import { scamRepository } from "../repository/scam.repository";
import { scamData, scamSchema } from "../schema/scam.schema";

const getScam = async (id: string) => {
    return await scamRepository.findFirst({id})
}

const getScams = async () => {
    return await scamRepository.findMany()
}

const createScam = async (scamData: scamData) => {
    const scamCreateRes = await scamRepository.create({
        id: createId(),
        name: scamData.name,
        description: scamData.description,
        isApproved: false,
        platform: scamData.platform,
        scammerInfo: scamData.scammerInfo
    })

    const attachTagsRes = await scamRepository.attachTags({scamId: scamCreateRes[0].id, tagIds: scamData.tags.map(tag => tag.value)})

    if (!scamData.fileKey) {
        return scamCreateRes
    }

    const attachImagesRes = await scamRepository.attachImages({id: createId(), scamId: scamCreateRes[0].id, fileKeys: scamData.fileKey})

    console.log(attachTagsRes)
    console.log(attachImagesRes)

    return scamCreateRes

    // const labelCreateRes = await labelRepository.createMany(scamData.labels.map(label => ({
    //     id: createId(),
    //     value: label.value,
    //     label: label.label,
    //     scamId: scamCreateRes.toJSON().id
    // })))

}

export const scamService = {
    createScam,
    getScams,
    getScam
}