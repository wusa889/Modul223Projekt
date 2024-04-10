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
  constructor(user: User, username: string, password: string, email: string, firstname: string, lastname: string) {
    super(user);
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
  save(){
    
  }

  createPost(){

  }

  createComment(){

  }

  giveLike(){

  }

  EditComment(){

  }

  EditPost(){

  }
  DeleteComment(){

  }

  DeletePost(){

  }


  //#endregion
}
