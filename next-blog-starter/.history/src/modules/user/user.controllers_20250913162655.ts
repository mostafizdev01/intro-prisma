import { Request, Response } from "express";
import { UserServices } from "./user.services";


const CreateUser = async (req: Request, res: Response) => {
    try {
        const data = await UserServices.CreateUser(req.body)
        res.status(201).json({
            status: "Success",
            message: "✅ Registration successfull",
            data: data
        })
    } catch (error) {
        console.log(error);

    }
}

// get all user data
const getAllFromDB = async (req: Request, res: Response) => {
    try {
        const data = await UserServices.getAllFromDB()
        res.status(200).json({
            status: "Success",
            message: "✅ All User ReadWrite Successfull.",
            data: data
        })
    } catch (error) {
        console.log(error);

    }
}

// get user by id 
const getAllFromDB = async (req: Request, res: Response) => {
    try {
        const data = await UserServices.getAllFromDB()
        res.status(200).json({
            status: "Success",
            message: "✅ All User ReadWrite Successfull.",
            data: data
        })
    } catch (error) {
        console.log(error);

    }
}


export const UserControllers = {
    CreateUser,
    getAllFromDB
}