import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createUser, userLogin } from "./controller/userController"
const path = require('path');
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/login", (req: Request, res: Response) =>  {
  res.send("loginpage")
});

app.get('/register', (req: Request, res: Response) => {
  res.send("registerpage")
})

app.get('/post/:id', (req: Request, res: Response) => {
  res.send(`on post page ${req.params.id}`)
})

app.post('/register', createUser)

app.post('/login', userLogin)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});