import { commentData } from "../schema/comment.schema"
import { commentService } from "../service/comment.service"
import { logger } from "../utils/logger"

const createScam = async (data: commentData) => {
    try {
        // console.log(data)
        // console.log(name, description)
        const res = await commentService.createComment({
            nickname: data.nickname,
            content: data.content,
            scamId: data.scamId
        })

        logger.info({
            message: `Comment added on scam: ${res[0].scamId}`
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