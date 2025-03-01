import mongoose, { Schema } from "mongoose";


//Comment schema
const commentSchema = new mongoose.Schema({
author:{type:Schema.Types.ObjectId,ref:"users",required:true},
comment:{type:String,required:true},
post:{type:Schema.Types.ObjectId,ref:"posts",required:true}
},{timestamps:true});

const commentModel = mongoose.models.comments || mongoose.model("comments",commentSchema);

export default commentModel;