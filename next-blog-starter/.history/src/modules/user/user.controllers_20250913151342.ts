import { Request, Response } from "express";
import { UserServices } from "./user.services";


const CreateUser = async (req:Request, res:Response) => {
    try {
        const data = await UserServices.CreateUser(req.body)
    } catch (error) {
        console.log(error);
        
    }
}


export const UserControllers = {
    CreateUser
}