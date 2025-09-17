import  Express  from "express"
import { AuthControllers } from "./auth.controller";

const router = Express.Router()

router.post("/login", AuthControllers.UserLogin)
router.post("/google", AuthControllers.AuthWithGoogle)
// router.get("/", PostControllers.GetAllPost)
// router.get("/:id", PostControllers.GetPostById)
// router.patch("/:id", PostControllers.UpdatePostById)
// router.delete("/:id", PostControllers.DeletePostById)

export const AuthRoute = router;