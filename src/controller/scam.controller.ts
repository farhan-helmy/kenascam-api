import { InsertScam } from "../db/drizzle.schema"
import { scamService } from "../service/scam.service"
import { logger } from "../utils/logger"

const createScam = async ({ name, description }: InsertScam) => {
    try {
        // console.log(name, description)
        return await scamService.createScam({
            name,
            description
        })
    } catch (err) {
        logger.error(err)
        return err
    }
}

export const scamController = {
    createScam
}