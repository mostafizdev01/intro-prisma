import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    // create data
    // const result = await prisma.user.create({
    //     data: {
    //         name: "Jhankar Mahbub",
    //         email: "jkh@gmail.com",
    //         profilePhoto: "https://programming-hero-ceo-jkr.png"
    //     }
    // })
    // const users = await prisma.user.createMany({
    //     data: [
    //         { name: "Mir", email: "mir@ph.com" },
    //         { name: "Tanmoy", email: "tanmoy@ph.com" },
    //         { name: "Mizan", email: "mizan@ph.com" },
    //         { name: "Imun", email: "imun@ph.com" }
    //     ]
    // });
    // // get data with prisma
    // const result = await prisma.user.findMany();
    // console.log(result);
    // // find uniq data with prisma
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 4
    //     }
    // });
    // console.log(result);
    // // find unique or error data with prisma
    // const result = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 9
    //     }
    // });
    // console.log(result);
    // // // Update data with prisma
    // const result = await prisma.user.update({
    //     where: {
    //         id: 2
    //     },
    //     data: {
    //         name: "Rasel"
    //     }
    // });
    // console.log(result);
    // // // Update many data with prisma
    // const result = await prisma.user.update({
    //     where: {
    //         id: 2
    //     },
    //     data: {
    //         profilePhoto: "https://www.programming-hero.png"
    //     }
    // });
    // console.log(result);
    // // // UpdateManyAndReturn data with prisma
    // const result = await prisma.user.updateManyAndReturn({
    //     where: {
    //         id: {gt: 2}
    //     },
    //     data: {
    //         profilePhoto: "https://www.programming-hero.png"
    //     }
    // });
    // console.log(result);
    // // delete data with prisma
    // const result = await prisma.user.delete({
    //     where: {
    //         id: 2
    //     }
    // });
    // console.log(result);
    // // // delete data many with prisma
    // const result = await prisma.user.deleteMany({
    //     where: {
    //         id: {lt: 3}
    //     }
    // });
    // console.log(result);
    // // sorting data many with prisma
    const result = await prisma.user.findMany({
        orderBy: {
            id: "desc"
        }
    });
    console.log(result);
}
main();
//# sourceMappingURL=index.js.map