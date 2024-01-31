import { createId } from "@paralleldrive/cuid2";
import { InsertScam } from "../db/drizzle.schema";
import { scamRepository } from "../repository/scam.repository";

const createScam = async (scam: InsertScam) => {
    return await scamRepository.create({
        id: createId(),
        name: scam.name,
        description: scam.description,
    })
}

export const scamService = {
    createScam
}