import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"


const CreateUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    const {email} = payload
    console.log(email)

    const existUser = await prisma.user.findUnique

    // const createUser = await prisma.user.create({
    //     data: payload
    // })
    return payload
}

/// get all user data
const getAllFromDB = async () => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            role: true,
            status: true,
            posts: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return result;
}

/// get all user data
const getDataById = async (id:number) => {
    const result = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            role: true,
            status: true,
            posts: true
        }
    })
    return result;
}

/// Update single user data
const updateDataById = async (id:number, payload:Partial<User>) => {
    const result = await prisma.user.update({
        where: {
            id
        },
        data: payload
    })
    return result;
}

/// Delete single user data
const deleteDataById = async (id:number) => {
    const result = await prisma.user.delete({
        where: {
            id
        }
    })
    return result;
}

export const UserServices = {
    CreateUser,
    getAllFromDB,
    getDataById,
    updateDataById,
    deleteDataById
}