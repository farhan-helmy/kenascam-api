import {t} from "elysia"

const Scam = t.Object({
    name: t.String(),
    description: t.String(),
})

export const scamSchema = {
    Scam
}