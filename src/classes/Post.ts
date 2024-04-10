import { db } from "../db";
import { posts } from "../db/schema";
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
        userid: userid
      })
      .returning()
      .then((res) => {
        if (Array.isArray(res)) {
          this.id = res[0].id;
        }
      });
  }
}
