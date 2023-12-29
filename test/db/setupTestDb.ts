import { Database } from "bun:sqlite";
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { scamList } from "../../__mocks__/scam.mock";
import { scams } from "../../src/db/drizzle.schema";

const sqlite = new Database('testdb.sqlite');
const db = drizzle(sqlite, { logger: true });


export const setupTestDb = async () => {
    migrate(db, { migrationsFolder: "drizzle" });


    const insertScam = await db.insert(scams).values(scamList).returning()

    console.log(insertScam)
    sqlite.close()

}
