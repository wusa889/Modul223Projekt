import { eq } from "drizzle-orm";
import { db } from "../db";
import { notifications } from "../db/schema";
import { Base } from "./Base";

export class Notification extends Base {
  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(v: string) {
    this._content = v;
  }
  private _sendTo: number;
  public get sendTo(): number {
    return this._sendTo;
  }
  public set sendTo(v: number) {
    this._sendTo = v;
  }

  /**
   *
   */
  constructor(userid: number, content: string) {
    super();
    this._sendTo = userid;
    this._content = content;
  }

  async save() {
    const newNotification = await db
      .insert(notifications)
      .values({
        content: this.content,
        fkSentTo: this.sendTo,
      })
      .returning()
      .then((res) => {
        if (Array.isArray(res)) {
          this.id = res[0].id;
        }
      });
  }

  static async deleteNotification(notificationId: number){
    const result = await db.delete(notifications).where(eq(notifications.id, notificationId))
  }

  static async getNotificationById(notificationId: number){
    const result = await db.select().from(notifications).where(eq(notifications.id, notificationId))
  }

  static async getAllNotificationsByUserId(userId: number){
    const result = await db.select().from(notifications).where(eq(notifications.fkSentTo, userId));
    return result;
  }
}
