import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";


const CreatePost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
   const result = await prisma.post.create({
      data: payload,
      include: {
         author: true,
      }
   })
   return result;
}

//get All Post
const GetAllPost = async (payload:any) => {
   console.log("Create post is clicked..");
   return payload   
}

// get post by id
const GetSinglePost = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
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