import mongoose, { Schema } from "mongoose";


//the community schema
const communitySchema = new mongoose.Schema({
    admin:{type:Schema.Types.ObjectId,required:true,ref:"users"},
    name:{type:String,required:true},
    profile:{type:String,required:true},
    description:{type:String,required:true},
    members:{type:Array,default:[]},
    privacy:{type:String,required:true},
    followers:{type:Array,default:[]}
},{minimize:false,timestamps:true});


const communityModel = mongoose.models.communities || mongoose.model("communities",communitySchema);

export default communityModel;