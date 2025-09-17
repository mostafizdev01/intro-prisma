import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"


const CreateUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    const {email} = payload
    
    const isExistUser = await prisma.user.findUnique({
        where:{email}
    })
    if(isExistUser){
        throw new Error("User already exist")
    }

    const createUser = await prisma.user.create({
        data: payload
    })
    return createUser
}

/// get all user data
const getAllFromDB = async () => {
    const result = await prisma.user.findMany({
        // where:{id:6},
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
            id: "desc"
        }
    })
    return result;
}

/// get all user data
const getDataById = async (id:number) => {
    console.log(id)
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
    
    // if(!result){
    //     throw new Error("User not found")
    // }
    
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

// post blog states
const getBlogStat = async () => {
    return await prisma.$transaction(async (tx)=> {
        const aggregates = await tx.post.aggregate({
            _count: true,
            _sum: {views: true},
            _avg: {views: true},
            _max: {views: true},
            _min: {views: true}
        })

        const featuredCount = await tx.post.count({
            where: {isFeatured: true}
        })

        const topFeaturedCount = await tx.post.findFirst({
            where: {isFeatured: true},
            orderBy: {createdAt: "desc"}
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
            }
        }
    })

}

export const UserServices = {
    CreateUser,
    getAllFromDB,
    getDataById,
    updateDataById,
    deleteDataById
}