import { text, sqliteTable, integer, primaryKey } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const scams = sqliteTable('SCAM', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    isApproved: integer('isApproved', { mode: 'boolean' }).default(false),
})

export const scamRelations = relations(scams, ({ many }) => ({
    images: many(images),
    scamToCategories: many(scamToCategories),
}))

export const images = sqliteTable('IMAGE', {
    id: text('id').primaryKey(),
    url: text('url').notNull(),
    scamId: text('scamId').notNull().references(() => scams.id),
})

export const categories = sqliteTable('CATEGORY', {
    id: text('id').primaryKey(),
    name: text('name').notNull().unique(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
    scamToCategories: many(scamToCategories),
}));

export const scamToCategories = sqliteTable('SCAM_TO_CATEGORY', {
    scamId: text('scamId').notNull().references(() => scams.id),
    categoryId: text('categoryId').notNull().references(() => categories.id),
}, (t) => ({
    pk: primaryKey({ columns: [t.scamId, t.categoryId] }),
}))

export const scamToCategoriesRelations = relations(scamToCategories, ({ one }) => ({
    scam: one(scams, {
        fields: [scamToCategories.scamId],
        references: [scams.id],
    }),
    category: one(categories, {
        fields: [scamToCategories.categoryId],
        references: [categories.id],
    }),
}));


export type SelectScam = typeof scams.$inferSelect
export type InsertScam = typeof scams.$inferInsert

export type SelectImage = typeof images.$inferSelect
export type InsertImage = typeof images.$inferInsert
