import { Request, Response } from "express";
import { Post } from "../classes/Post";

export const createPost = (req: Request, res: Response): void => {
  let id: number;
  if (req.headers !== null && req.body !== null) {
    const { content, id } = req.body;
    const newPost = new Post(content);
    newPost.save(Number(id));
    res.status(200).send(JSON.stringify(newPost));
  }
};

export const editPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const postid: number = Number(req.params.id);
        let userid: number = Number(req.headers.id);
        const { content } = req.body;

        if (!userid || !postid || !content) {
            res.status(400).send('Missing parameters');
        }

        const dbPost = await Post.getPost(postid);

        if (dbPost[0] && dbPost[0].userid === userid) {
            await Post.editPost(postid, content);
            // Assuming editPost method doesn't return the updated post, you might not need to log/send it back.
            res.status(200).send('Post updated successfully');
        } else {
            res.status(404).send('Post not found or user mismatch' + `user id: ${userid} postid ${postid} `);
        }
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send('Internal server error');
    }
};

export const deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userid, role } = req.body;
        const postid: number = Number(req.params.id);
     
        if (!userid || !postid) {
            res.status(400).send('Missing parameters');
        }

        const dbPost = await Post.getPost(postid);

        if(Number(userid) > 1){
            await Post.deletePost(postid);
            res.status(200).send('Post deleted successfully');
        } 
        
        else{
        if (dbPost[0] && dbPost[0].userid === userid) {
            await Post.deletePost(postid);
            // Assuming editPost method doesn't return the updated post, you might not need to log/send it back.
            res.status(200).send('Post deleted successfully');
        } else {
            res.status(404).send('Post not found or user mismatch' + `user id: ${userid} postid ${postid} `);
        }
    }
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send('Internal server error');
    }
};

export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
    const posts =  await Post.getAllPosts();
    res.status(200).send(JSON.stringify(posts))
}

export const getPostById = async (req: Request, res: Response): Promise<void> => {
    const postid: number = Number(req.params.id);
    const posts =  await Post.getPost(postid)
    res.status(200).send(JSON.stringify(posts))
}
