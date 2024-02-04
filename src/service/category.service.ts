import { createId } from "@paralleldrive/cuid2";
import { categoryRepository } from "../repository/category.repository";
import { categoryData } from "../schema/category.schema";

const createCategory = async (categoryData: categoryData) => {
    const categoryCreateRes = await categoryRepository.create({
        id: createId(),
        name: categoryData.name,
    })

    console.log(categoryCreateRes)

    return categoryCreateRes
}

export const categoryService = {
    createCategory
}