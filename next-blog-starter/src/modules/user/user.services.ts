import { prisma } from "../../config/db"


const CreateUser = async (payload: any) => {
    const createUser = await prisma.user.create({
        data: payload
    })
    return createUser
}

export const UserServices = {
    CreateUser
}