import {Static, t} from "elysia"

const Scam = t.Object({
    name: t.String(),
    description: t.String(),
    fileKey: t.Optional(t.Array(t.String())),
    tags: t.Array(t.Object({
        value: t.String(),
        label: t.String()
    })),
    platform: t.String(),
    scammerInfo: t.String() 
})

export type scamData = Static<typeof Scam>

export const scamSchema = {
    Scam
}