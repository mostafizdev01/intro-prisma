import { Request, Response } from "express";
import { PostServices } from "./post.services";

const CreatePost = (req:Request, res:Response) => {
    const result = await PostServices.CreatePost()
}