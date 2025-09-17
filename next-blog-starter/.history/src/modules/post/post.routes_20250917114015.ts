import  Express  from "express"
import { PostControllers } from "./post.controller"

const router = Express.Router()

router.post("/create-post", PostControllers.CreatePost)
router.get("/", PostControllers.GetAllPost)
router.get("/:id", PostControllers.GetPostById)
router.get("/stats", PostControllers.getBlogStat)
router.patch("/:id", PostControllers.UpdatePostById)
router.delete("/:id", PostControllers.DeletePostById)

export const PostRoute = router;