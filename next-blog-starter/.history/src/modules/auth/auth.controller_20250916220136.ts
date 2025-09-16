import { Request, Response } from "express"


const UserLogin = async (req:Request, res:Response) => {
     const result = await AuthServices.UserLogin
}

export const AuthControllers = {
    UserLogin
}