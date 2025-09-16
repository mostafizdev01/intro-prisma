import  Express  from "express"
import { AuthControllers } from "./auth.controller";

const router = Express.Router()

router.post("/create-post", AuthControllers.UserLogin)
// router.get("/", PostControllers.GetAllPost)
// router.get("/:id", PostControllers.GetPostById)
// router.patch("/:id", PostControllers.UpdatePostById)
// router.delete("/:id", PostControllers.DeletePostById)

export const AuthRoute = router;