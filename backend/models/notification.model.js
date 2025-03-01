import mongoose, { Schema } from "mongoose";

//the notification schema
const notificationSchema = new mongoose.Schema({
to:{type:Schema.Types.ObjectId,required:true},
from:{type:Schema.Types.ObjectId,ref:"users",required:true},
message:{type:String,required:true},
seen:{type:Boolean,default:false}
},{timestamps:true});

//the notification model
const notificationModel = mongoose.models.notifications || mongoose.model("notifications",notificationSchema);

export default notificationModel;