import { InsertImage } from "../db/drizzle.schema";
import { imageRepository } from "../repository/image.repository";

const createImage = async (image: InsertImage) => {
    return await imageRepository.create(image)
}

export const imageService = {
    createImage
}
