import { createId } from "@paralleldrive/cuid2";
import { tagRepository } from "../repository/tag.repository";
import { categoryData } from "../schema/category.schema";

const createCategory = async (categoryData: categoryData) => {
  const categoryCreateRes = await tagRepository.create({
    id: createId(),
    name: categoryData.name,
    value: categoryData.value,
  });

  console.log(categoryCreateRes);

  return categoryCreateRes;
};

const getAllCategories = async () => {
  const categories = await tagRepository.getAll();

  return categories;
};

export const categoryService = {
  createCategory,
  getAllCategories,
};
