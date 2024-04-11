import { Request, Response } from "express";
import { User } from "../classes/User";
import { db } from "../db/index"
import { eq } from "drizzle-orm";
import { users } from "../db/schema";

export const createUser = (req: Request, res: Response): void => {
  if (req.body !== null) {
    const { username, password, email, firstname, lastname } = req.body;
    const newUser = new User(username, password, email, firstname, lastname);
    newUser.save();
    res.status(200).send(JSON.stringify(newUser))
  }
};

export const userLogin = (req: Request, res: Response): void => {
    if (req.body === null){
        res.status(400).redirect('/login')
    }
    const {username, password} = req.body
    db.select().from(users).where(eq(users.username, username)).then((user) => {
        let myUser = user[0];
        if(myUser.username === username && myUser.password === password){
            res.status(200).send(JSON.stringify({'allesgut':'hatklappert'}))
        }
        else{
            res.send(JSON.stringify(user[0]))
        }
    })

}

