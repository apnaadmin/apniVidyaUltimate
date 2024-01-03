"use server"
import User from "../database/user.modal";
import { connectToDatabase } from "./mongoose"
import { CreateUserParams } from "../app";
import { revalidatePath } from "next/cache";
import { FilterQuery } from "mongoose"
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
export async function getAllUsers({searchQuery}:any) {
    try {
        connectToDatabase();
        const query:FilterQuery<typeof User> = {}
        if(searchQuery){
            query.$or = [
                {name:{$regex:new RegExp(searchQuery,"i")}},
                {bio:{$regex:new RegExp(searchQuery,"i")}},
                {experience:{$regex:new RegExp(searchQuery,"i")}},
                {subject:{$regex:new RegExp(searchQuery,"i")}},
                {location:{$regex:new RegExp(searchQuery,"i")}},
            ]
        }
      
        const users = await User.find(query)
    
        return users;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
}
