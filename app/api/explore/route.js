import { NextResponse } from "next/server"


export async function GET(){
    try {
        
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch product"}, {status: 500})
    }
}