import { Request, Response } from "express"
import { AuthServices } from "./auth.service"


const UserLogin = async (req:Request, res:Response) => {
     const result = await AuthServices.UserLogin(req.body)
     res.send(result)
}

export const AuthControllers = {
    UserLogin
}