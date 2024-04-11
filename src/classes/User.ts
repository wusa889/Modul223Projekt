import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";
import { Role } from "../enums/Role";
import { Base } from "./Base";

export class User extends Base {
  //#region props
  private _username: string;
  public get username(): string {
    return this._username;
  }
  public set username(v: string) {
    this._username = v;
  }

  private _password: string;
  public get password(): string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }

  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }

  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(v: string) {
    this._lastName = v;
  }

  private _firstname: string;
  public get firstname(): string {
    return this._firstname;
  }
  public set firstname(v: string) {
    this._firstname = v;
  }

  protected _role: Role;
  public get role(): Role {
    return this._role;
  }
  public set role(v: Role) {
    this._role = v;
  }

  private _isBanned: boolean;
  public get isBanned(): boolean {
    return this._isBanned;
  }
  public set isBanned(v: boolean) {
    this._isBanned = v;
  }

  //#endregion

  //#region Constructor
  constructor(
    username: string,
    password: string,
    email: string,
    firstname: string,
    lastname: string
  ) {
    super();
    this._username = username;
    this._password = password;
    this._email = email;
    this._firstname = firstname;
    this._lastName = lastname;
    this._role = Role.user;
    this._isBanned = false;
  }
  //#endregion

  //#region functions
  async save() {
    const newUser = await db
      .insert(users)
      .values({
        username: this.username,
        password: this.password,
        email: this.email,
        firstname: this.firstname,
        name: this.lastName,
        role: this.role,
        isBanned: this.isBanned,
      })
      .returning()
      .then((res) => {
        if (Array.isArray(res)) {
          this.id = res[0].id;
        }
      });
  }

  static async resetPassword(id: number, password: string){
    if(password.length < 10){
      console.log("password to short")
      return;
    }
    const result = await db.update(users).set({password: password}).where(eq(users.id, id))
  }

  static async getUser(id: number) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result;
  }
  static async getAllUsers() {
    const result = await db.select().from(users);
    return result;
  }
  static async deleteUser(id: number) {
    const result = await db.delete(users).where(eq(users.id, id));
  }

    //#endregion
}
