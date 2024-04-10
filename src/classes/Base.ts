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

  /**
   *
   */
  constructor() {
    this._id = null;
  }

  
}
