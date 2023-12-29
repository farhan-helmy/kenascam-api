import { Elysia } from "elysia";

export const scamRouter = new Elysia()
    .get('/', () => 'hi scam')

