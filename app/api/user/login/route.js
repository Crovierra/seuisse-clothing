import { NextResponse } from "next/server";
import connectDatabase from "@/lib/server/database.js"
import bcrypt from "bcrypt"
import User from "@/model/UserSchema";
import jwt  from "jsonwebtoken"

export async function POST(req){
    try {
        await connectDatabase();
        const { email, password } = await req.json()
        
        if(!email || !password){
            return NextResponse.json({message: "Cannot leave the field empty"}, {status: 400}) //400 invalid request data, missing field
        }
        
        if(password.length < 6){
            return NextResponse.json({message: "Password must more than 6 characters"}, {status: 400})
        }
        
        const user = await User.findOne({email})
        
        
        if(!user){
            return NextResponse.json({message: "User not found"}, {status: 404})
        }
        
        const checkPassword = await bcrypt.compare(password, user.password)
        
        if(!checkPassword){
            return NextResponse.json({message: "Wrong password"}, {status: 404})
        }
        
        const accessToken = jwt.sign(user.toObject(), process.env.NEXT_PUBLIC_ACTIVE_TOKEN,{expiresIn: "1h"})
        
        return NextResponse.json({message: "Login sucessfull", accessToken: accessToken, name:user.name}, {status: 200})

    } catch (error) {
        return NextResponse.json({message: "Failed to login"}, {status: 500})
    }
}