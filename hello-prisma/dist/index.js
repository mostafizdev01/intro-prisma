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
    const result = await prisma.user.findUnique({
        where: {
            id: 4
        }
    });
    console.log(result);
}
main();
//# sourceMappingURL=index.js.map