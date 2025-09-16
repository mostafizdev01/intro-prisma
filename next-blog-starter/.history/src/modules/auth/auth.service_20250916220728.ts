import { prisma } from "../../config/db";


const UserLogin = async (payload: any) => {
     const {email, password} = payload;

     const isUserExist = await prisma.user.findUnique({
        where: email
     })

     console.log(email, password)
}

export const AuthServices = {
    UserLogin
}