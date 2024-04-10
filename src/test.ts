import { User } from "./classes/User";
import { db } from "./db";
import { posts, users } from "./db/schema";

const newuser = new User("Test", "Test1234567", "email", "hallo", "hallo")
newuser.save();

const result = db.query.users.findFirst({
    with: {
        likes: true,
        comments: true,
        posts: true
    },
}).then(res =>{
    console.log(res)
})