import { Base } from "./Base";
import { User } from "./User";

export class Comments extends Base{

private _content : string;
public get content() : string {
    return this._content;
}
public set content(v : string) {
    this._content = v;
}

    constructor(user: User, content: string) {
        super(user);
        this._content = content;
    }
}