import { Request, Response } from "express";
import { PostServices } from "./post.services";

const CreatePost = async (req:Request, res:Response) => {
    const result = await PostServices.CreatePost(req.body)
    console.log(result);
    
    res.send({result})
}

export const PostControllers = {
    CreatePost
}