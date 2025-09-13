import { Request, Response } from "express";
import { UserServices } from "./user.services";


const CreateUser = async (req:Request, res:Response) => {
    try {
        const data = await UserServices.CreateUser()
    } catch (error) {
        console.log(error);
        
    }
}