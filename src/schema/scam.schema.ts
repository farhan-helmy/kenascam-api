import {Static, t} from "elysia"

const Scam = t.Object({
    name: t.String(),
    description: t.String(),
    fileKey: t.Optional(t.Array(t.String())),
    labels: t.Array(t.Object({
        value: t.String(),
        label: t.String()
    })), 
})

export type scamData = Static<typeof Scam>

export const scamSchema = {
    Scam
}