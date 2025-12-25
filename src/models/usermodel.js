import { Schema,model,Types } from "mongoose";

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    
    isActive:{type:Boolean,default:true},
    isBlocked:{type:Boolean,default:false},
   
    // createdAt:{type:Date,default:Date.now,timestamps: true},
    // updatedAt:{type:Date,default:Date.now,timestamps: true}, 
    
    lastLoginAt:{type:Date},
    
    companyId:{type:Types.ObjectId,ref:"Company",required:true},
        roleId:{type:Types.ObjectId,ref:"Role",required:true},   

},
{
    timestamps: true
})

export default model("User",UserSchema)