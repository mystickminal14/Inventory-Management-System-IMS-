import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    
    fullName:{
        type: String,
        required: [true,"Full Name is required"],
        lowercase:true
    },
    email :{
        type:String,
        required :[true,"Email address is required"],
        unique:true,
        lowercase:true,
    }
    ,
    password :{
        type:String,
        required :[true,"Password is required"],
    },
    roles:{
        type:String,
        required :[true,"User role is required"],
        enum:['admin','manager','employee'],
        lowercase:true
    }

},{timestamps:true})

const User = mongoose.model('User');
export default User;