import prisma from "@/lib/db";

export async function findAllProduct() {
    return await prisma.products.findMany({
        orderBy: {id:"desc"}
    })
    
}

export async function getAllProduct(){
    const response = await fetch('http://119.59.99.128:5001/api/v1/products')

    if(!response.ok){
        throw new Error('ไม่สามารถดึงข้อมูลได้')
    }
    return response.json()
}

export async function getProductByCategory(params: string) {
    const response = await fetch('https://dummyjson.com/products/category/smartphones')

    if(!response.ok){
        throw new Error('ไม่สามารถดึงข้อมูลได้')
    }
    return response.json()
}