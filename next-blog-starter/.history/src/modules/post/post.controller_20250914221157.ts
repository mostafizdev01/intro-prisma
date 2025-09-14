import { Request, Response } from "express";
import { PostServices } from "./post.services";

const CreatePost = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.CreatePost(req.body)
        res.status(201).json({result})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}

export const PostControllers = {
    CreatePost
}