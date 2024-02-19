import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from "drizzle-orm/libsql/migrator";

console.log(process.env.TURSODB_URL);
console.log(process.env.TURSODB_TOKEN);

const client = createClient({ url: process.env.TURSODB_URL! , authToken: process.env.TURSODB_TOKEN! });
const db = drizzle(client, { logger: true });

migrate(db, { migrationsFolder: "drizzle" });
