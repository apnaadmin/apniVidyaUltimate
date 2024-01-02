"use server"
import User from "../database/user.modal";
import { connectToDatabase } from "./mongoose"
import { CreateUserParams } from "../app";
import { revalidatePath } from "next/cache";
export async function createUser(userData:CreateUserParams)
{
    try{
        const {path,...newData} = userData
        connectToDatabase()
        const newUser = await User.create(newData)
        revalidatePath(path)
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
