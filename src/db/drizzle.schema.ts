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
    comments: many(comments),
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

export const comments = sqliteTable('COMMENT', {
    id: text('id').primaryKey(),
    nickname: text('nickname').notNull(),
    content: text('content').notNull(),
    scamId: text('scamId').notNull().references(() => scams.id),
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

export type SelectCategory = typeof categories.$inferSelect
export type InsertCategory = typeof categories.$inferInsert

export type InsertComment = typeof comments.$inferInsert
