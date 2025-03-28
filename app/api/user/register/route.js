import connectDatabase from "@/lib/server/database";
import bcrypt from "bcrypt"
import User from "@/model/UserSchema";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectDatabase();
        const { name, address, phone, email, password } = await req.json()
        if(!name || !address || !phone || !email || !password){
            return NextResponse.json({message: "All field must be filled"})
        }

        //Check if the email already used
        const checkEmail = await User.findOne({email})
        if(checkEmail){
            return NextResponse.json({message: "Email already registed"}, {status: 409}) //409 conflict, same email
        }

        //Check phone number also
        const checkPhone = await User.findOne({phone})
        if(checkPhone){
            return NextResponse.json({message: "This phone number already registed"}, {status: 409})
        }

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
  
        const user = new User({name, address, phone, email, password: hashedPassword})
        await user.save()
        
        return NextResponse.json({message: "Success Register Account"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Failed to register"}, {status: 500})
    }
}