"use server"
import User from "../database/user.modal";
import { connectToDatabase } from "./mongoose"
import { CreateUserParams } from "../app";

export async function createUser(userData:CreateUserParams)
{
    try{
        connectToDatabase()
        const newUser = await User.create(userData)
    }
    catch(error)
    {
        console.log("hello world");
        console.log(error);
    }
}
export async function getAllUsers() {
    try {
        connectToDatabase();
      
        const users = await User.find({})
    
        return users;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
}
