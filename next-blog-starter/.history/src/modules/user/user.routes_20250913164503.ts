import express from "express";
import { UserControllers } from "./user.controllers";


const router = express.Router()

router.get("/", UserControllers.getAllFromDB)
router.post("/", UserControllers.CreateUser)
router.get("/:id", UserControllers.getUserById)
router.patch("/:id", UserControllers.updateUserById)
router.delete("/:id", UserControllers.deleteUserById)


export const UserRoute = router;