import { eq } from "drizzle-orm";
import { db } from "../db";
import { likes, posts, users } from "../db/schema";
import { Base } from "./Base";

export class Post extends Base {
  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(v: string) {
    this._content = v;
  }

  /**
   *
   */
  constructor(content: string) {
    super();
    this._content = content;
  }

  async save(userid: number) {
    const newPost = await db
      .insert(posts)
      .values({
        content: this.content,
        userid: userid,
      })
      .returning()
      .then((res) => {
        if (Array.isArray(res)) {
          this.id = res[0].id;
        }
      });
  }

  static async getPost(postid: number) {
    //const result = await db.select().from(posts).where(eq(posts.id, postid));
    const result = await db.query.posts.findMany({
      with: {
        userid: true,
        comments: true,
        likes: true,
      },
      where: (eq(posts.id, postid) )
    })
    return result;
  }

  static async getAllPosts() {
    const resultq = db.query.posts.findMany({
      with: {
        userid: true,
        comments: true,
        likes: true,
      },
    });
    return resultq
  }
  static async deletePost(postid: number) {
    const result = await db.delete(posts).where(eq(posts.id, postid));
  }
  static async editPost(postid: number, newContent: string) {
    const result = await db
      .update(posts)
      .set({ content: newContent })
      .where(eq(posts.id, postid));
  }
}
