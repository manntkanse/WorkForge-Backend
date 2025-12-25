import { Schema,model,Types } from "mongoose";

const RoleSchema = new Schema({
    name:{type:String,required:true},
    companyId:{type:Types.ObjectId,ref:"Company",required:true},
    permissions:[{type: Types.ObjectId,ref: "Permission"}],    
    status:{type:String,enum:["active","inactive"],default:"active"},
    
    IsActive:{type:Boolean,default:true},
    
    isSystemRole: {type: Boolean,default: false},
    // createdAt:{type:Date,default:Date.now,timestamps: true},
    // updatedAt:{type:Date,default:Date.now,timestamps: true}, 

},
{
    timestamps: true
})

export default model("Role",RoleSchema)