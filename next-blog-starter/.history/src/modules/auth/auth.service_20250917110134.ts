import { Prisma } from "@prisma/client";
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
        return "Your password does't match!"
     }

     return isUserExist
}

// authWithGoogle
const AuthWithGoogle = async(payload: Prisma.UserCreateInput)=> {
   let isUserExist = await prisma.user.findUnique({
      where: {email:payload.email}
   })

   if(!isUserExist){
     isUserExist = await prisma.user.create({
         data:payload
      })
   }
}
export const AuthServices = {
    UserLogin
}