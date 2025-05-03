import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    address: String,
    phone: {
        type: String,
        match: [/^\+?\d{10,15}$/, "Invalid phone number"]
    },
    role: {
        type: String
    },
    checkout: {
        type: [
            {
                id: Number,
                quantity: Number
            }
        ], default: []
    }
        
})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;