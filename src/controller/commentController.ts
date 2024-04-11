import { Request, Response } from "express";
import { Comments } from "../classes/Comment";

export const createComment = (req: Request, res: Response): void => {
    let userid: number;
    if (req.headers !== null && req.body !== null) {
      let postid = Number(req.params.id)
      const { content, userid } = req.body;
      const newComment = new Comments(content)
      newComment.save(Number(userid), postid);
      res.status(200).send(JSON.stringify(newComment));
    }
  };

  export const editComment = async (req: Request, res: Response): Promise<void> => {
    try {
        const commentid: number = Number(req.params.id);
        let userid: number = Number(req.headers.id);
        const { content } = req.body;

        if (!userid || !commentid || !content) {
            res.status(400).send('Missing parameters');
        }

        const dbPost = await Comments.getComment(commentid);

        if (dbPost[0] && dbPost[0].userid === userid) {
            await Comments.editComment(commentid, content);
            // Assuming editPost method doesn't return the updated post, you might not need to log/send it back.
            res.status(200).send('Post updated successfully');
        } else {
            res.status(404).send('Post not found or user mismatch' + `user id: ${userid} commentid ${commentid} `);
        }
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send('Internal server error');
    }
};

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userid, role } = req.body;
        const commentid: number = Number(req.params.id);

        if (!userid || !commentid) {
            res.status(400).send('Missing parameters');
        }

        const dbPost = await Comments.getComment(commentid);

        if(Number(userid) > 1){
            await Comments.deleteComment(commentid);
            res.status(200).send('Post deleted successfully');
        } 

        else{
        if (dbPost[0] && dbPost[0].userid === userid) {
            await Comments.deleteComment(commentid);
            // Assuming editPost method doesn't return the updated post, you might not need to log/send it back.
            res.status(200).send('Comment deleted successfully');
        } else {
            res.status(404).send('Comment not found or user mismatch' + `user id: ${userid} commentid ${commentid} `);
        }
    }
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send('Internal server error');
    }
    
};

export const getAllCommentsByPost = async (req: Request, res: Response): Promise<void> => {
    const postId = Number(req.params.id);
    const comments = await Comments.getAllCommentsOfPost(postId);
    res.status(200).send(JSON.stringify(comments))
}