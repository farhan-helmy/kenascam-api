import { categoryService } from "../service/tag.service";
import { commentService } from "../service/comment.service";
import { logger } from "../utils/logger";

const getCategories = async () => {
  try {
    // console.log(data)
    // console.log(name, description)

    const start = performance.now();

    const res = await categoryService.getAllCategories();

    const end = performance.now();

    logger.info({
      message: `Categories fetched in ${end - start} ms`,
    });

    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const categoryController = {
  getCategories,
};
