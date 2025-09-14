import  Express  from "express"
import { PostControllers } from "./post.controller"

const router = Express.Router()

router.post("/create-post", PostControllers.CreatePost)
router.get("/", PostControllers.GetAllPost)
router.post("/create-post", PostControllers.CreatePost)
router.post("/create-post", PostControllers.CreatePost)
router.post("/create-post", PostControllers.CreatePost)

export const PostRoute = router;