import { Request, Response } from "express";
import { PostServices } from "./post.services";

const CreatePost = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.CreatePost(req.body)
        res.send(result)
    } catch (error) {
      console.log(error)
    }
}

export const PostControllers = {
    CreatePost
}