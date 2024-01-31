import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const scams = sqliteTable('SCAM', {
    id: text('id'),
    name: text('name').notNull(),
    description: text('description'),
    isApproved: integer('isApproved', { mode: 'boolean' }).default(false),
})

export const images = sqliteTable('IMAGE', {
    id: text('id'),
    url: text('url').notNull(),
    scamId: text('scamId').notNull().references(() => scams.id),
})

export const scamRelations = relations(scams, ({ many }) => ({
    images: many(images)
}))

export type SelectScam = typeof scams.$inferSelect
export type InsertScam = typeof scams.$inferInsert

export type SelectImage = typeof images.$inferSelect
export type InsertImage = typeof images.$inferInsert