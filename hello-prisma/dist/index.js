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
    // get data with prisma
    const result = await prisma.user.findMany();
    console.log(result);
}
main();
//# sourceMappingURL=index.js.map