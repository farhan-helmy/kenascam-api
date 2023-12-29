import { Database } from "bun:sqlite";
import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from "./drizzle.schema";

const sqlite = new Database('kenascam.sqlite');
export const db = drizzle(sqlite, {
    logger: true,
    schema
});

