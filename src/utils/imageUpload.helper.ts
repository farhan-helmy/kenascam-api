import { S3Client, S3, CompleteMultipartUploadCommandOutput } from "@aws-sdk/client-s3";
import { createId } from "@paralleldrive/cuid2";
import { Upload } from "@aws-sdk/lib-storage";
import { logger } from "./logger";
import { imageService } from "../service/image.service";

const s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.KENA_SCAM_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.KENA_SCAM_AWS_SECRET_ACCESS_KEY!,
    },
});

export const uploadImage = async ({ image, imageType, scamId }: { image: ReadableStream, imageType: string, scamId: string }) => {

    const parallelUploadS3 = new Upload({
        client: s3,
        params: {
            Bucket: "kenascam-image",
            Key: `${createId()}.${imageType}`,
            Body: image
        },
    })

    const uploadDone = await parallelUploadS3.done();

    await imageService.createImage({
        id: createId(),
        url: uploadDone.Location as string,
        scamId
    })
    return uploadDone

}