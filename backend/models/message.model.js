import mongoose, { Schema } from "mongoose";

//The message schema
const messageSchema = new mongoose.Schema({
    from:{type:Schema.Types.ObjectId,ref:"users",required:true},
    to:{type:Schema.Types.ObjectId,ref:"users",required:true},
    message:{type:String,required:true},
    seen:{type:Boolean,default:false}
    },{timestamps:true});
    
    //The message Model
    const messageModel = mongoose.model("messages",messageSchema);
    
    export default messageModel;