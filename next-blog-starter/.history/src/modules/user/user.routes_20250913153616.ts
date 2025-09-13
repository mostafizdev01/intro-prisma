import express from "express";
import { UserControllers } from "./user.controllers";


const router = express.Router()

router.get("/", UserControllers.getAllFromDB)
router.post("/", UserControllers.CreateUser)


export const UserRoute = router;