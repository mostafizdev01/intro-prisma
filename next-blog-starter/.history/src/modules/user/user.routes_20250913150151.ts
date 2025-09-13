import express from "express";
import { UserControllers } from "./user.controllers";


const router = express.Router()

router.post("/", UserControllers.CreateUser)


export const UserRoute = router