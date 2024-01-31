import { db } from "../db/drizzle.db"
import { InsertImage, images } from "../db/drizzle.schema"

const create = (image: InsertImage) => {
    return db.insert(images).values(image)
}

export const imageRepository = {
    create
}