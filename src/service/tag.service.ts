import { createId } from "@paralleldrive/cuid2";
import { tagRepository } from "../repository/tag.repository";
import { tagData } from "../schema/category.schema";

const createTag = async (tagData: tagData) => {
    const tagCreateRes = await tagRepository.create({
        id: createId(),
        name: tagData.name,
        value: tagData.value
    })

    console.log(tagCreateRes)

    return tagCreateRes
}

const getAllTags = async () => {
    const tags = await tagRepository.getAll()

    return tags
}

export const tagService = {
    createTag,
    getAllTags
}