import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


const CreatePost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
   const result = await prisma.post.create({
      data: payload,
      include: {
         author: {
            select: {
               id: true,
               name: true,
               email: true,
               phone: true,
            }
         }
      }
   })
   return result;
}

//get All Post
const GetAllPost = async () => {
   const result = await prisma.post.findMany()
   return result   
}

// get post by id
const GetSinglePost = async (id: number) => {
   const result = await prisma.post.findUnique({
      where: {
         id
      }
   })
   
}

// upate post by id
const UpdatePostById = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
}

//DeletePostById
const DeletePostById = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
}

export const PostServices = {
    CreatePost,
     GetAllPost,
     GetSinglePost,
     UpdatePostById,
     DeletePostById
}