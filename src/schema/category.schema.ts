import { Static, t } from "elysia"

const Category = t.Object({
    name: t.String(),
})

export type categoryData = Static<typeof Category>

export const categorySchema = {
    Category
}