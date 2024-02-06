 import mongoose from 'mongoose';
 
 const Schema=mongoose.Schema;
 const userScheme=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    branch:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    event:{
        
    }
 });
 export default mongoose.model("user",userScheme);