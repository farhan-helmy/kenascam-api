import { text, sqliteTable, integer, primaryKey } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const scams = sqliteTable('SCAM', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    platform: text('platform'),
    scammerInfo: text('scammerInfo'),
    isApproved: integer('isApproved', { mode: 'boolean' }).default(false),
    createdAt: text('createdAt'),
    updatedAt: text('updatedAt')
})

export const scamRelations = relations(scams, ({ many }) => ({
    images: many(images),
    scamToTags: many(scamToTags),
    comments: many(comments),
}))

export const images = sqliteTable('IMAGE', {
    id: text('id').primaryKey(),
    url: text('url').notNull(),
    scamId: text('scamId').notNull().references(() => scams.id),
})

export const imageRelations = relations(images, ({ one }) => ({
    scam: one(scams, {
        fields: [images.scamId],
        references: [scams.id],
    }),
}));

export const tags = sqliteTable('TAGS', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    value: text('value').notNull().unique(),
})

export const comments = sqliteTable('COMMENT', {
    id: text('id').primaryKey(),
    nickname: text('nickname').notNull(),
    content: text('content').notNull(),
    createdAt: text('createdAt'),
    updatedAt: text('updatedAt'),
    scamId: text('scamId').notNull().references(() => scams.id),
})

export const commentsRelations = relations(comments, ({ one }) => ({
    scam: one(scams, {
        fields: [comments.scamId],
        references: [scams.id],
    }),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
    scamToTags: many(scamToTags),
}));

export const scamToTags = sqliteTable('SCAM_TO_TAGS', {
    scamId: text('scamId').notNull().references(() => scams.id),
    tagId: text('tagId').notNull().references(() => tags.id),
}, (t) => ({
    pk: primaryKey({ columns: [t.scamId, t.tagId] }),
}))

export const scamToTagsRelations = relations(scamToTags, ({ one }) => ({
    scam: one(scams, {
        fields: [scamToTags.scamId],
        references: [scams.id],
    }),
    tag: one(tags, {
        fields: [scamToTags.tagId],
        references: [tags.id],
    }),
}));


export type SelectScam = typeof scams.$inferSelect
export type InsertScam = typeof scams.$inferInsert

export type SelectImage = typeof images.$inferSelect
export type InsertImage = typeof images.$inferInsert

export type SelectTag = typeof tags.$inferSelect
export type InserTag = typeof tags.$inferInsert

export type InsertComment = typeof comments.$inferInsert
