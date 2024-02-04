import { createId } from "@paralleldrive/cuid2";
import { commentData } from "../schema/comment.schema";
import { categoryRepository } from "../repository/category.repository";

const createCategory = async (categoryData: commentData) => {
    const commentCreateRes = await categoryRepository.create({
        id: createId(),
        name: categoryData.nickname,
    })

    console.log(commentCreateRes)

    return commentCreateRes
}

export const categoryService = {
    createCategory
}