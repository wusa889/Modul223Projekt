import { Role } from "../enums/Role";
import { Moderator } from "./Moderator";
import { User } from "./User";

export class Admin extends Moderator{

    constructor(username: string, password: string, email: string, firstname: string, lastname: string) {
        super(username, password, email, firstname, lastname);
        this._role = Role.admin;
    }

    BanUser(user: number){

    }

    UnbanUser(user: number){
        
    }
}