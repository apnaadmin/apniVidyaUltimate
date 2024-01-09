import {Schema,models,model,Document} from 'mongoose'

export interface IUser extends Document{
    name:string
    bio:string
    pic:string
    experience:string
    subject:string
    location:string
    number:string
    email:string
    mode:string

}
const userSchema = new Schema(
    {
  
    name:{type:String,required:true},
   bio:{type:String,required:true},
   mode:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    pic:{type:String,required:true},
    experience:{type:String,required:true},
    subject:{type:String,required:true},
    location:{type:String,required:true},
    number:{type:String,required:true},
    state:{type:String,required:true}
    }
)
const User = models.User || model<IUser>('User',userSchema)
export default User


