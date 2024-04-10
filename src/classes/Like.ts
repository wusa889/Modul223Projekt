import { eq } from "drizzle-orm";
import { db } from "../db";
import { likes } from "../db/schema";
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
    constructor(like: LikeType) {
        super();

        this._LikeType = like;
    }

    async save(userid: number, postid: number){
        const newLike = await db
        .insert(likes)
        .values({
            type: this.LikeType,
            userid: userid,
            postid: postid
        })
        .returning()
        .then((res) => {
            if(Array.isArray(res)){
                this.id = res[0].id
            }
        })
    }

    static async deleteLike(likeId: number){
        const result = await db.delete(likes).where(eq(likes.id, likeId));
    }

    static async updateToLike(likeId: number){
        const result = await db.update(likes).set({type: 1}).where(eq(likes.id, likeId))
    }
    
    static async updateToDislike(likeId: number){
        const result = await db.update(likes).set({type: 2}).where(eq(likes.id, likeId))
    }
}