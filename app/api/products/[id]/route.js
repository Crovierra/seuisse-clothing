import { NextResponse } from "next/server"
import connectDatabase from "@/lib/server/database"
import { authenticateUser } from "@/lib/server/authenticateUser"
import User from "@/model/UserSchema"
import { ObjectId } from "mongodb";

export async function GET(req, {params}){
    try {
        const id = params

        if(!id){
            return NextResponse.json({message:"Product not found"}, {status: 404})
        }

        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        
        return NextResponse.json({data:response}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"Failed to fetch product"}, {status: 500})
    }
}

export async function POST(req){
    try { 
        await connectDatabase()
        const user = await authenticateUser(req)
        const userId = new ObjectId(user._id)
        
        const checkoutItem  = await req.json()
        
        if(!checkoutItem){
            return NextResponse.json({message: "Item didn't exist"}, {status: 400})
        }
        
        const check = await User.findOne({_id:userId, "checkout.id": checkoutItem.id})
        if(check){
            return NextResponse.json({message: "Item already in the cart"}, {status: 400})
        }
        
        const updatedUser = await User.findByIdAndUpdate(userId,{
            $push: { checkout: checkoutItem}
        }, {new : true})
        
        
        return NextResponse.json({message: "Successfully add new item to cart"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to update item"}, {status: 500})
    }
}