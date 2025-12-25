import { Schema,model,Types } from "mongoose";

const CompanySchema = new Schema({
    name:{type:String,required:true},
    slug:{type:String,required:true,unique:true},
    status:{type:String,enum:["active","inactive"],default:"active"},
    IsActive:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now,timestamps: true},
    updatedAt:{type:Date,default:Date.now,timestamps: true}, 
    ownerUserId:{type:Types.ObjectId,ref:"User",required:true},
    createdBy:{type:Types.ObjectId,ref:"User",required:true},

})

export default model("Company",CompanySchema)