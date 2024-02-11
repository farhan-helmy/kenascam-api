import { scamData } from "../schema/scam.schema"
import { scamService } from "../service/scam.service"
import { logger } from "../utils/logger"

const getScam = async (id: string) => {
    try {
        console.log(id)
        const start = performance.now()

        const res = await scamService.getScam(id)

        const end = performance.now()

        logger.info({
            message: `Scam ${id} fetched`,
            time: end - start
        })

        console.log(res)
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

const getAllScams = async () => {
    try {
        const start = performance.now()

        const res = await scamService.getScams()

        const end = performance.now()

        logger.info({
            message: `Scams fetched`,
            time: end - start
        })

        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

const createScam = async (data: scamData) => {
    try {
        // console.log(data)
        // console.log(name, description)
        const resScam = await scamService.createScam({
            name: data.name,
            description: data.description,
            tags: data.tags,
            fileKey: data.fileKey,
            platform: data.platform,
            scammerInfo: data.scammerInfo
        })

        console.log(resScam)

        return {
            status: 201,
            message: "Created"
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

const vote = async ({ action, id }: { action: 'upvote' | 'downvote', id: string }) => {
    try {

        const res = 
            action === 
                'upvote' ? 
                    await scamService.upvoteScam(id) 
                        : 
                    await scamService.downvoteScam(id)

        return res
    } catch (err) {
        console.log(err)
        return err
    }
}
export const scamController = {
    createScam,
    getAllScams,
    getScam,
    vote,
}