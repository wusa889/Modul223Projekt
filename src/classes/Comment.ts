import { eq } from "drizzle-orm";
import { db } from "../db";
import { comments } from "../db/schema";
import { Base } from "./Base";
import { User } from "./User";

export class Comments extends Base {
  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(v: string) {
    this._content = v;
  }

  constructor(content: string) {
    super();
    this._content = content;
  }

  async save(userid: number, postid: number) {
    const newComment = await db
      .insert(comments)
      .values({
        content: this.content,
        userid: userid,
        postid: postid,
      })
      .returning()
      .then((res) => {
        if (Array.isArray(res)) {
          this.id = res[0].id;
        }
      });
  }

  static async deleteComment(commentId: number) {
    const result = await db.delete(comments).where(eq(comments.id, commentId));
  }

  static async editComment(commentId: number, newContent: string){
    const result = await db.update(comments).set({content: newContent}).where(eq(comments.id, commentId));
    return result;
  }

  static async getComment(commentId: number) {
    const result = await db.select().from(comments).where(eq(comments.id, commentId));
    return result;
  }

  static async getAllCommentsOfPost(postId: number) {
    const result = await db.query.comments.findMany({
      with: {
        userid: true,
        postid: true
      },
      where: (eq(comments.postid, postId) )
    })
    return result;
  }
  
}
