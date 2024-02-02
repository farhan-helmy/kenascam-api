import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from "./drizzle.schema";

const client = createClient({ url: process.env.TURSODB_URL! , authToken: process.env.TURSODB_TOKEN! });

export const db = drizzle(client, {
    logger: true,
    schema
});

