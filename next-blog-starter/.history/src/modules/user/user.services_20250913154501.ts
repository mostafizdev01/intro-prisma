import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"


const CreateUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    const createUser = await prisma.user.create({
        data: payload
    })
    return createUser
}

/// get all user data
const getAllFromDB = async () => {
    console.log("Get is clicked..")
    const result = await prisma.user.findMany()
    return result;
}

export const UserServices = {
    CreateUser,
    getAllFromDB
}