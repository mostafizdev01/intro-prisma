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
const getUserById = async (req: Request, res: Response) => {
    try {
        const data = await UserServices.getDataById(Number(req.params.id))
        res.status(200).json({
            status: "Success",
            message: "✅ Single User ReadWrite Successfull.",
            data: data
        })
    } catch (error) {
        console.log(error);

    }
}

// update user by id 
const updateUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const data = await UserServices.updateDataById(id, body)
        res.status(200).json({
            status: "Success",
            message: "✅ Single User ReadWrite Successfull.",
            data: data
        })
    } catch (error) {
        console.log(error);

    }
}


export const UserControllers = {
    CreateUser,
    getAllFromDB,
    getUserById
}