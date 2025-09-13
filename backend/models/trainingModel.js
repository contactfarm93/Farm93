import mongoose from "mongoose"

const trainingSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    experienceLevel:{
        type:String,
        enum:["beginner","intermediate","advanced"],
        required:true
    },
    comment:{
        type:String
    }
})
export const Training=mongoose.model("Training",trainingSchema)