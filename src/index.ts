import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createUser, userLogin } from "./controller/userController"
import { createPost, deletePost, editPost, getAllPosts, getPostById } from "./controller/postController";
import { createComment, deleteComment, editComment, getAllCommentsByPost } from "./controller/commentController";

const cors = require('cors')
const path = require('path');
dotenv.config();



const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'ui')));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'ui', 'index.html')) // ok
});

app.get("/login", (req: Request, res: Response) =>  {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'))
});

app.get('/register', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'ui', 'register.html'))
})

app.get('/post', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'ui', 'newPost.html'))
})

app.get('/allpost', getAllPosts)

app.get('/allComments/:id', getAllCommentsByPost)

app.get('/post/:id', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'ui', 'postdetail.html'))
})
app.get('/post/:id/comment', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'ui', 'newComment.html'))
})

app.get('/postbyid/:id', getPostById)

app.post('/register', createUser)

app.post('/login', userLogin)

app.post('/post', createPost)

app.post('/post/:id', editPost)

app.post('/comment/:id', editComment)

app.post('/post/:id/comment', createComment)

app.delete('/post/:id', deletePost)

app.delete('/comment/:id', deleteComment)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});