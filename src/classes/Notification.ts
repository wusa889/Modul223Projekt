import { Base } from "./Base";
import { User } from "./User";

export class Notification extends Base{

    private _content : string;
    public get content() : string {
        return this._content;
    }
    public set content(v : string) {
        this._content = v;
    }
        
    private _sentBy : User;
    public get sentBy() : User {
        return this._sentBy;
    }
    public set sentBy(v : User) {
        this._sentBy = v;
    }
    
    private _sendTo : User;
    public get sendTo() : User {
        return this._sendTo;
    }
    public set sendTo(v : User) {
        this._sendTo = v;
    }
    
    /**
     *
     */
    constructor(sender: User, receiver: User, content: string) {
        super(sender);
        this._sentBy = sender;
        this._sendTo = receiver;
        this._content = content;
    }
    
    save(){

    }
    
    send(){

    }

}