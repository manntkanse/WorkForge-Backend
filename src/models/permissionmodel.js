import { Schema,model,Types } from "mongoose";

const PermissionSchema = new Schema({
    key:{type:String,required:true,unique:true,uppercase:true,trim:true},
    description:{type:String,required:true},
    category:{type:String,required:true,trim:true},
    
    // createdAt:{type:Date,default:Date.now,timestamps: true},
    // updatedAt:{type:Date,default:Date.now,timestamps: true}, 
},
{
    timestamps: true        
})

export default model("Permission",PermissionSchema)