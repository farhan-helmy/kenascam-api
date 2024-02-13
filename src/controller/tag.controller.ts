import { tagService } from "../service/tag.service";
import { commentService } from "../service/comment.service";
import { logger } from "../utils/logger";

const getTags = async () => {
  try {
    // console.log(data)
    // console.log(name, description)

    const start = performance.now();

    const res = await tagService.getAllTags();

    const end = performance.now();

    logger.info({
      message: `Tags fetched`,
      time: end - start,
    });

    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const tagController = {
  getTags,
};
