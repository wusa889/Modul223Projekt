import { iBase } from "../interfaces/iBase";
import { User } from "./User";

export abstract class Base implements iBase {
  private _id: number | null;
  public get id(): number | null{
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _createdAt: Date;
  public get createdAt(): Date {
    return this._createdAt;
  }
  public set createdAt(v: Date) {
    this._createdAt = v;
  }

  private _updatedAt: Date;
  public get updatedAt(): Date {
    return this._updatedAt;
  }
  public set updatedAt(v: Date) {
    this._updatedAt = v;
  }

  
  private _updatedBy : string;
  public get updatedBy() : string {
    return this._updatedBy;
  }
  public set updatedBy(v : string) {
    this._updatedBy = v;
  }
  
  
  private _createdBy : string;
  public get createdBy() : string {
    return this._createdBy;
  }
  public set createdBy(v : string) {
    this._createdBy = v;
  }

  /**
   *
   */
  constructor(user: User) {
    this._id = null;
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._createdBy = user.username;
    this._updatedBy = user.username;
  }
}
