import { User } from "./classes/User";

let myUser = new User("newUser", "test", "Mail@mail", "hello", "there")

myUser.save().then(()=>{
    console.log("User saved")
});