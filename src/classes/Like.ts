import { LikeType } from "../enums/LikeType";
import { Base } from "./Base";
import { User } from "./User";

export class Like extends Base{
    
    private _LikeType : LikeType;
    public get LikeType() : LikeType {
        return this._LikeType;
    }
    public set LikeType(v : LikeType) {
        this._LikeType = v;
    }
    
    
    /**
     *
     */
    constructor(user: User, like: LikeType) {
        super(user);
        
        this._LikeType = like;
    }

    save(){
        
    }
}