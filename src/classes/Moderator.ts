import { Role } from "../enums/Role";
import { User } from "./User";

export class Moderator extends User{

    constructor(username: string, password: string, email: string, firstname: string, lastname: string) {
        super(username, password, email, firstname, lastname);
        this._role = Role.moderator;
    }

    DeleteUserPost(){

    }

    DeleteUserComment(){

    }
}