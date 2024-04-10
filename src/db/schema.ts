import { boolean, date, integer, varchar } from "drizzle-orm/pg-core";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users: any = pgTable('users', {
    username: varchar('username').notNull(),
    password: varchar('password').notNull(),
    email: varchar('email').notNull(),
    id:serial("id").primaryKey(),
    name: text("name").notNull(),
    firstname: text("firstname").notNull(),
    role: integer('role').notNull(),
    isBanned: boolean('isBanned').notNull(),
})

export const posts = pgTable('posts', {
    id: serial("id").primaryKey(),
    content: text('content').notNull(),
    fkUser: integer('fkUser').notNull().references(() => users.id),
    fkLikes: integer('fkLikes'),
})

export const notifications = pgTable('notifications', {
    id: serial("id").primaryKey(),
    content: text('content').notNull(),
    fkSentBy: integer('fkSentBy').notNull().references(() => users.id),
    fkSentTo: integer('fkSentTo').notNull().references(() => users.id)
})

export const comments = pgTable('comments', {
    id:serial("id").primaryKey(),
    content: text('content').notNull(),
    fkUser: integer('fkUser').notNull().references(() => users.id),
    fkPost: integer('fkPost').notNull().references(() => posts.id)
})

export const likes = pgTable('likes', {
    id:serial("id").primaryKey(),
    type: boolean('type').notNull(),
    fkPost: integer('fkPost').notNull().references(() => posts.id),
    fkUser: integer('fkUser').notNull().references(() => users.id)
})