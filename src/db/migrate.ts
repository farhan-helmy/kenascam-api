import { Database } from "bun:sqlite";
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database('kenascam.sqlite');
const db = drizzle(sqlite, { logger: true });

migrate(db, { migrationsFolder: "drizzle" });
