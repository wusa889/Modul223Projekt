import { eq } from "drizzle-orm";
import { Admin } from "./classes/Admin";
import { Moderator } from "./classes/Moderator";
import { Notification } from "./classes/Notification";
import { Post } from "./classes/Post";
import { User } from "./classes/User";
import { db } from "./db";
import { comments, notifications, posts, users } from "./db/schema";



// const resultComments = db.query.comments.findMany({
//     with: {
//       userid: true,
//       postid: true
//     },
//     where: (eq(comments.postid, 1) )
//   }).then((res) => {
//     console.log(res)
//     process.exit(0)
//   })

// const result = Post.getAllPosts().then((posts) => {
//     console.log(posts)
// })

// const result44 = db.query.posts.findMany({
//     with: {
//       userid: true,
//       comments: true,
//       likes: true,
//     },
//     where: (eq(posts.id, 2) )
//   }).then((res) => {
//     console.log(res)
//     process.exit(0)
//   })


// const resultq = db.query.posts.findMany({
//     with: {
//         userid: true,
//         comments: true,
//         likes: true
//     }
// }).then(res => {
//     console.log(res)
//     process.exit(0)
// })

// const token = {userid: 1}

// const newMod = new Moderator("Modmaster3000", "megamodman200", "mod@mod.mod", "modder", "mann")
// const newuser = new User("Test", "Test1234567", "email", "hallo", "hallo")
// const newAdmin = new Admin("Gamb", "IchLiebeBigMacs", "admin@admin.admin", "Gamb", "Steiner")
// const newnotification = new Notification(10, "Ich bin eine Notification")

// newuser.save();
// newMod.save();
// newAdmin.save();
// newnotification.save();

// const result2 = db.select()
// .from(users)
// .leftJoin(notifications, eq(users.id, notifications.fkSentTo))
// .where(eq(users.id, 10)).then((res) =>{
//     console.log(res)
// })

// const newpost = new Post("Ich bin ein Post und bin cool")
// newpost.save(token.userid)

// const result3 = db.query.users.findFirst({
//     with: {
//         likes: true,
//         comments: true,
//         posts: true,
//         notifications: true,
//     },
// }).then(res =>{
//     console.log(res)
//     process.exit(0)
// })