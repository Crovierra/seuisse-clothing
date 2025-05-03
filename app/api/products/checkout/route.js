import { authenticateUser } from "@/lib/server/authenticateUser";
import connectDatabase from "@/lib/server/database";
import User from "@/model/UserSchema";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


const checkAuthorize = (user) =>{
    if(!user){
        return NextResponse.json({message: "Unauthorized User"}, {status: 409})
    }
}

export async function GET(req){
    try {
        const user = await authenticateUser(req)
        checkAuthorize(user)
        const userId = new ObjectId(user._id)
    
        await connectDatabase();
    
        const checkUser = await User.findOne(userId)
        if(!checkUser){
            return NextResponse.json({message: "User not found"}, {status: 404})
        }
        const checkoutItem = checkUser.checkout
    
        return NextResponse.json({message: "Success fetching item from database", item: checkoutItem},{status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to fetch checkout item"}, {status: 500})
    }
}

export async function DELETE(req){
    try {
        const id = await req.json();
        const user = await authenticateUser(req)
        const userId = new ObjectId(user._id)
        
        if(!id){
            return NextResponse.json({message: "Item Id invalid"}, {status: 400})
        }
        checkAuthorize(user)
        
        const updateUser = await User.findByIdAndUpdate(userId, { $pull: { checkout: { id: id } } },
            { new: true })
            
            if (!updateUser) {
                return NextResponse.json({message: "User not found"}, {status: 404})
            }
               
            const item = updateUser.checkout
            
        return NextResponse.json({message: "Item successfully remove from cart", item: item}, {status:200})

    } catch (error) {
        return NextResponse.json({message: "Failed to delete item from cart"}, {status: 500})
    }
}

export async function PATCH(req){
    try {
        const item = await req.json();
        
        if(!item){
            return NextResponse.json({message:"Item didn't exist"}, {status: 400})
        }

        const user = await authenticateUser(req)
        checkAuthorize(user)
        const userId = new ObjectId(user._id)

        
        const updateData = await User.findOneAndUpdate(
            {_id: userId, "checkout.id":item.id},
            {$set: {"checkout.$.quantity":item.quantity}},
            {new: true}
        )
        
        if(!updateData){
            return NextResponse.json({message:"Item not found in user data"}, {status: 400})
        }

        const updatedItem = updateData.checkout

        return NextResponse.json({message: "Success changing data", updatedItem:updatedItem}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to change data"}, {status: 500})
    }
}