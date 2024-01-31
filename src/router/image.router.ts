import { Elysia } from "elysia";
import { uploadImage } from "../utils/imageUpload.helper";
import { imageSchema } from "../schema/image.schema";

export const imageRouter = new Elysia()
    .post("/upload", async (ctx) => {

        const imageUpload = await uploadImage({
            image: (ctx.body as any)?.image.stream(),
            imageType: (ctx.body as any)?.image.type.split("/")[1],
            scamId: (ctx.body as any)?.scamId
        })

        return {
            url: imageUpload.Location,
            key: imageUpload.Key
        }
    },
        {
            body: imageSchema.Image
        })