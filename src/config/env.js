import dotenv from 'dotenv';
dotenv.config();

console.log("env.js file running");


export const  port = process.env.PORT || 5000;
export const mongoUri = process.env.MONGO_URI;
