import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/drizzle.schema.ts",
  out: "./drizzle",
} satisfies Config;