import { findAllProduct, getAllProduct } from "@/app/services/product-service";
import { NextResponse } from "next/server";

export async function GET() {
    
try {
    const product = await getAllProduct()
    return NextResponse.json({
        data: product
    })
} catch (error) {
    return NextResponse.json({
        data: error
    }, {status: 404})
}
    
}