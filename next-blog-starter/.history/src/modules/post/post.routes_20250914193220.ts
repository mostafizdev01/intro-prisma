import  Express  from "express"
import { PostControllers } from "./post.controller"

const router = Express.Router()

router.post("/create-post", PostControllers.CreatePost)

export const PostRouters = router;