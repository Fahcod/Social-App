import mongoose, { Schema } from "mongoose";


//The user schema
const userSchema = new mongoose.Schema({
username:{type:String,required:true},
email:{type:String,required:true,unique:true},
country:{type:String,required:true},
password:{type:String,required:true},
profile:{type:String,default:"https://res.cloudinary.com/dtuatqheg/image/upload/v1736867796/oofp1azpdbc1ybvd35el.png"},
user_bio:{type:String,default:"A new socialspot user"},
followers:[{type:Schema.Types.ObjectId,ref:'users'}],
following:[{type:Schema.Types.ObjectId,ref:'users'}],
friends:[{type:Schema.Types.ObjectId,ref:'users'}]
},{timestamps:true});

//The user Model
const userModel = mongoose.model("users",userSchema);

export default userModel;