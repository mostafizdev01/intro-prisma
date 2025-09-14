import  Express  from "express"
import { PostControllers } from "./post.controller"

const route = Express.Router()

route.post("/create-post", PostControllers.CreatePost)

export const router = route;