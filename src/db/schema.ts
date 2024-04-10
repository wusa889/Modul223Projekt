import { relations } from "drizzle-orm";
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

export const userRelations = relations(users, ({one, many}) => ({
    posts: many(posts),
    likes: many(likes),
    comments: many(comments),
    notifications: many(notifications)
}))

export const posts = pgTable('posts', {
    id: serial("id").primaryKey(),
    content: text('content').notNull(),
    userid: integer('userid').notNull()
})

export const postRelations = relations(posts, ({one, many}) => ({
    userid: one(users, {
        fields: [posts.userid],
        references: [users.id]
    }),
    likes: many(likes),
    comments: many(comments)
}))

export const notifications = pgTable('notifications', {
    id: serial("id").primaryKey(),
    content: text('content').notNull(),
    fkSentTo: integer('fkSentTo').notNull()
})

export const notificationRelations = relations(notifications, ({one}) => ({
    fkSentTo: one(users, {
        fields: [notifications.fkSentTo],
        references: [users.id]
    })
}))


export const comments = pgTable('comments', {
    id:serial("id").primaryKey(),
    content: text('content').notNull(),
    postid: integer("postid").notNull(),
    userid: integer("userid").notNull()
})

export const commentRelations = relations(comments, ({one}) => ({
    postid: one(posts, {
        fields: [comments.postid],
        references: [posts.id]
    }),
    userid: one(users, {
        fields: [comments.userid],
        references: [users.id]
    })
}))

export const likes = pgTable('likes', {
    id:serial("id").primaryKey(),
    type: boolean('type').notNull(),
    userid: integer("user_id").notNull(),
    postid: integer("postid").notNull()
})

export const likeRelations = relations(likes, ({one}) => ({
    postid: one(posts, {
        fields: [likes.postid],
        references: [posts.id]
    }),
    userid: one(users, {
        fields: [likes.userid],
        references: [users.id]
    })
}))