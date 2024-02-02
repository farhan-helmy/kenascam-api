import { createId } from "@paralleldrive/cuid2";
import { InsertScam } from "../db/drizzle.schema";
import { scamRepository } from "../repository/scam.repository";
import { scamData, scamSchema } from "../schema/scam.schema";
import { labelRepository } from "../repository/label.repository";

const createScam = async (scamData: scamData) => {
    const scamCreateRes = await scamRepository.create({
        id: createId(),
        name: scamData.name,
        description: scamData.description,
        isApproved: false
    })

    console.log(scamCreateRes)

    return scamCreateRes

    // const labelCreateRes = await labelRepository.createMany(scamData.labels.map(label => ({
    //     id: createId(),
    //     value: label.value,
    //     label: label.label,
    //     scamId: scamCreateRes.toJSON().id
    // })))

}

export const scamService = {
    createScam
}