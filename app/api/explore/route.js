import connectDatabase from "@/lib/server/database.js"
import { NextResponse } from "next/server"


export async function GET(){
    try {
        await connectDatabase();

        const allProducts = await User.find() //User di ganti ke Schema Product
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch product"}, {status: 500})
    }
}