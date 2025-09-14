import { Request, Response } from "express";
import { PostServices } from "./post.services";

// Create post
const CreatePost = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.CreatePost(req.body)
        res.status(201).json({result})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}

// get all post
const GetAllPost = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.GetAllPost()
        res.status(200).json({result})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}

// get post by id
const GetPostById = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.GetSinglePost(Number(req.params.id))
        res.status(201).json({result})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}

// get update by id
const UpdatePostById = async (req: Request, res: Response) => {
    const id = req.body.params;
    const body = req.body;
    try {
        const result = await PostServices.UpdatePostById(id, body)
        res.status(201).json({result})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}

// delete post by id
const DeletePostById = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.DeletePostById(Number(req.params.id))
        res.status(201).json({result})
    } catch (error) {
      console.log(error)
      res.send(error)
    }
}

export const PostControllers = {
    CreatePost
}