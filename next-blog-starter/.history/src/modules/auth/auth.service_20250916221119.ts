import { prisma } from "../../config/db";


const UserLogin = async (payload: any) => {
     const {email, password} = payload;

     const isUserExist = await prisma.user.findUnique({
        where: {email}
     })

     if(!isUserExist){
        return "User does't exist"
     }

     if(isUserExist.password !== password){
        return "Your password does't match"
     }

     return isUserExist
}

export const AuthServices = {
    UserLogin
}