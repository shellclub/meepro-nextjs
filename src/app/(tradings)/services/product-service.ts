import prisma from "@/lib/db";

export async function findAllProduct() {
    return await prisma.products.findMany({
        orderBy: {id:"desc"}
    })
    
}