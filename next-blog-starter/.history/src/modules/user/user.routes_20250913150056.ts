import express from "express";
import { UserControllers } from "./user.controllers";


const route = express.Router()

route.post("/", UserControllers.CreateUser)