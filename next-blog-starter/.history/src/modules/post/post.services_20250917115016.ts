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

   const total = await prisma.post.count({ where })
   return {
      pagination: {
         total,
         page,
         limit,
         totalpage: Math.ceil(total / limit)
      },
      data: result
   }
}

// get post by id
const GetSinglePost = async (id: number) => {

   return await prisma.$transaction(async (tx) => {
      await tx.post.update({
         where: { id },
         data: {
            views: {
               increment: 1
            }
         }
      });


      return await prisma.post.findUnique({
         where: {
            id
         },
         include: {
            author: true
         }
      })

   })

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


// post blog states
const getBlogStat = async () => {
   return await prisma.$transaction(async (tx) => { // create transaction rollback. rollback name => tx
      const aggregates = await tx.post.aggregate({ /// get post aggregate
         _count: true,
         _sum: { views: true },
         _avg: { views: true },
         _max: { views: true },
         _min: { views: true }
      })

      const featuredCount = await tx.post.count({ /// j sob post er isFeatured true ase tader count ber korbe
         where: { isFeatured: true }
      })

      const topFeaturedCount = await tx.post.findFirst({ // isFeature true && view count top tader ekta k dekhabe
         where: { isFeatured: true },
         orderBy: { createdAt: "desc" }
      })

      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7)

      const lastWeekPostCount = await tx.post.count({
         where: {
            createdAt: {
               gte: lastWeek
            }
         }
      })
      return {
         stats: {
            totalPosts: aggregates._count ?? 0,
            totalView: aggregates._sum.views ?? 0,
            avgViews: aggregates._avg.views ?? 0,
            maxViews: aggregates._max.views ?? 0,
            minViews: aggregates._min.views ?? 0
         },
         featured: {
            count: featuredCount,
            topPost: topFeaturedCount
         },
         lastWeekPostCount
      }
   })

}

export const PostServices = {
   CreatePost,
   GetAllPost,
   GetSinglePost,
   UpdatePostById,
   DeletePostById,
   getBlogStat
}