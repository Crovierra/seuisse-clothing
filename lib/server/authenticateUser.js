import { jwt } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function authenticateUser(req){
    try {
        const authHeaders = req.headers.get("Authorization")
        const token = authHeaders.slice(" ")[1]

        if(!token){
            return NextResponse.json({message:"Token not found"}, {status: 404})
        }

        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_ACTIVE_TOKEN)
        if(!decoded){
            return NextResponse.json({message:"Invalid token, user not authorized"}, {status: 401}) // 401 Not authorized
        }

        return decoded;
    } catch (error) {
        console.log("User not authorized", error)
    }
}