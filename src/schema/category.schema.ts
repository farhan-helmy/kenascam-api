import { Static, t } from "elysia"

const Tag = t.Object({
    name: t.String(),
    value: t.String()
})

export type tagData = Static<typeof Tag>

export const tagSchema = {
    Tag
}