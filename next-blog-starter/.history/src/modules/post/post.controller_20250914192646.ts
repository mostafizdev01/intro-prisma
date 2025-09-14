import { Request, Response } from "express";
import { PostServices } from "./post.services";

const CreatePost = async (req:Request, res:Response) => {
    const result = await PostServices.CreatePost()
}