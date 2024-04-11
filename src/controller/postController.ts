import { Request, Response } from "express";
import { Post } from "../classes/Post";

export const createPost = (req: Request, res: Response): void => {
  if (req.body !== null) {
    const id = Number(req.params.id);
    const { content } = req.body;
    const newPost = new Post(content);
    newPost.save(id)
    res.status(200).send(JSON.stringify(newPost));
  }
};
