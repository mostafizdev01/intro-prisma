import { Prisma } from "@prisma/client"
import { prisma } from "../../config/db"


const CreateUser = async (payload: Prisma.UserCreateInput) => {
    const createUser = await prisma.user.create({
        data: payload
    })
    return createUser
}

export const UserServices = {
    CreateUser
}