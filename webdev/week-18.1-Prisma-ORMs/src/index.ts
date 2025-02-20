import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(){
    await prisma.user.create({
        data:{
            username:"subrat",
            password:"aman",
            age:22,
            city:"Rewa"
        }
    })
}
createUser();