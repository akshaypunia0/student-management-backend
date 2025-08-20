import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    passwordHash: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        require: true
    }
},
{
    timestamps: true
});

export const User = mongoose.model('User', userSchema);