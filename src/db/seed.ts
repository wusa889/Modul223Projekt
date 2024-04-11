import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users, posts, notifications, comments, likes } from "./schema";
import "dotenv/config"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log("Seeding startet");
  for (let index = 1; index < 4; index++) {
    let userId: number;
    const user = await db.insert(users).values({
      username: `user${index}`,
      password: `password${index}`,
      email: `email${index}@email.com`,
      name: `name${index}`,
      firstname: `firstname${index}`,
      role: 1,
      isBanned: false
    }).returning()

    const seedPost = await db.insert(posts).values([
        {
            content: `post number ${index}`,
            userid: index
        },
        {
            content: `post number ${index + 1}`,
            userid: index
        },
        {
            content: `post number ${index + 2}`,
            userid: index
        }
    ]).returning()

    const seednotification = await db.insert(notifications).values([
        {
            content: `notification number 1`,
            fkSentTo: index
        },
        {
            content: `notification number 2`,
            fkSentTo: index
        },
        {
            content: `notification number 3`,
            fkSentTo: index
        }
    ]).returning()

    const seedcomment = await db.insert(comments).values([
        {
            content: "Comment number 1",
            postid: index,
            userid: index
        },
        {
            content: "Comment number 2",
            postid: index,
            userid: index
        },
        {
            content: "Comment number 3",
            postid: index,
            userid: index
        },
    ]).returning()

    const seedLike = await db.insert(likes).values([
        {
            type: 1,
            userid: index,
            postid: index
        },
        {
            type: 1,
            userid: index,
            postid: index
        },
        {
            type: 1,
            userid: index,
            postid: index
        }
    ]).returning()

  }
  console.log("Seeding Done")
  process.exit(0)
}

main().then().catch(err=>{
    console.error(err);
    process.exit(0)
});
