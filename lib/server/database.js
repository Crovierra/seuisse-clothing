import mongoose from "mongoose"

export default async function connectDatabase(){
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    } catch (error) {
        console.log("Failed to connect to database")
    }
}