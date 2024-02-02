import { InsertScam } from "../db/drizzle.schema"
import { scamData } from "../schema/scam.schema"
import { scamService } from "../service/scam.service"
import { logger } from "../utils/logger"

const createScam = async (data: scamData) => {
    try {
        // console.log(data)
        // console.log(name, description)
        const res = await scamService.createScam({
            name: data.name,
            description: data.description,
            labels: data.labels,
            fileKey: data.fileKey
        })

        return {
            status: 201,
            message: res
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

export const scamController = {
    createScam
}