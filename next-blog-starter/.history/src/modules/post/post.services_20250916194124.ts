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
const GetAllPost = async ({ page, limit, search, isFeatured, tags }: { page: number, limit: number, search: string, isFeatured?: boolean, tags?: string[] }) => {
   const skip = (page - 1) * limit;
   const where: any = {
      AND: [
         search && {
            OR: [
               {
                  title: { contains: search, mode: 'insensitive' }
               },
               {
                  content: { contains: search, mode: 'insensitive' }
               }
            ]
         },
         typeof isFeatured === "boolean" && { isFeatured },
         (tags && tags.length > 0) && { tags: { hasEvery: tags } }
      ].filter(Boolean)
   };
   const result = await prisma.post.findMany({
      skip,
      take: limit,
      where,
      include: {
         author: {
            select: {
               name: true,
               email: true,
               phone: true
            }
         }
      },
      orderBy: {
         createdAt: "desc"
      }
   })

   const total = await prisma.post.count({where})
   return {
      pagination: {
         total,
         page,
         limit,
         totalpage: Math.ceil(total / limit)
      },
      data:result
   }
}

// get post by id
const GetSinglePost = async (id: number) => {

   return await prisma.$transaction(async (tx) => {
      await tx.post.update({
         where: {id},
         data: {
            views: {
               increment : 1
            }
         }
      })
   })

   const result = await prisma.post.findUnique({
      where: {
         id
      },
      include: {
         author: true
      }
   })

   return result

}

// upate post by id
const UpdatePostById = async (id: number, payload: Partial<Post>) => {
   const result = await prisma.post.update({
      where: {
         id
      },
      data: payload
   })

   return result;

}

//DeletePostById
const DeletePostById = async (id: number) => {
   const result = await prisma.post.delete({
      where: {
         id
      }
   })
   return result;
}

export const PostServices = {
   CreatePost,
   GetAllPost,
   GetSinglePost,
   UpdatePostById,
   DeletePostById
}