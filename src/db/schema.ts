import { boolean, date, integer, varchar } from "drizzle-orm/pg-core";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users: any = pgTable('users', {
    createdAt: date('createdAt').notNull(),
    updatedAt: date('updatedAt').notNull(),
    username: varchar('username').notNull(),
    password: varchar('password').notNull(),
    email: varchar('email').notNull(),
    id:serial("id").primaryKey(),
    name: text("name").notNull(),
    firstname: text("firstname").notNull(),
    role: integer('role').notNull(),
    isBanned: boolean('isBanned').notNull(),
    fkfkCreatedBy: integer('fkCreatedBy').notNull().references(() => users.id),
    fkfkUpdatedBy: integer('fkUpdatedBy').notNull().references(() => users.id)
})

export const posts = pgTable('posts', {
    id: serial("id").primaryKey(),
    createdAt: date('createdAt').notNull(),
    updatedAt: date('updatedAt').notNull(),
    fkfkCreatedBy: integer('fkCreatedBy').notNull().references(() => users.id),
    fkfkUpdatedBy: integer('fkUpdatedBy').notNull().references(() => users.id),
    content: text('content').notNull(),
    fkUser: integer('fkUser').notNull().references(() => users.id),
    fkLikes: integer('fkLikes'),
})

export const notifications = pgTable('notifications', {
    id: serial("id").primaryKey(),
    createdAt: date('createdAt').notNull(),
    updatedAt: date('updatedAt').notNull(),
    fkfkCreatedBy: integer('fkCreatedBy').notNull().references(() => users.id),
    fkfkUpdatedBy: integer('fkUpdatedBy').notNull().references(() => users.id),
    content: text('content').notNull(),
    fkSentBy: integer('fkSentBy').notNull().references(() => users.id),
    fkSentTo: integer('fkSentTo').notNull().references(() => users.id)
})

export const comments = pgTable('comments', {
    id:serial("id").primaryKey(),
    createdAt: date('createdAt').notNull(),
    updatedAt: date('updatedAt').notNull(),
    fkfkCreatedBy: integer('fkCreatedBy').notNull().references(() => users.id),
    fkfkUpdatedBy: integer('fkUpdatedBy').notNull().references(() => users.id),
    content: text('content').notNull(),
    fkUser: integer('fkUser').notNull().references(() => users.id),
    fkPost: integer('fkPost').notNull().references(() => posts.id)
})

export const likes = pgTable('likes', {
    id:serial("id").primaryKey(),
    createdAt: date('createdAt').notNull(),
    updatedAt: date('updatedAt').notNull(),
    type: boolean('type').notNull(),
    fkfkCreatedBy: integer('fkCreatedBy').notNull().references(() => users.id),
    fkfkUpdatedBy: integer('fkUpdatedBy').notNull().references(() => users.id),
    fkPost: integer('fkPost').notNull().references(() => posts.id),
    fkUser: integer('fkUser').notNull().references(() => users.id)
})