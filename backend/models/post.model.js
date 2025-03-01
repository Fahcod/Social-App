import mongoose, { Schema } from "mongoose";

//The post schema
const postSchema = new mongoose.Schema({
    owner:{type:Schema.Types.ObjectId,ref:"users",required:true},
    post_type:{type:String,required:true},
    post_value:{type:String,default:""},
    text:{type:String,default:""},
    likes:{type:Array,default:[]},
    views:{type:Array,default:[]},
    shares:{type:Array,default:[]},
},{timestamps:true,minimize:false});

//Create a virtual field
postSchema.virtual('comments',{
ref:'comments',
localField:'_id',
foreignField:'post'
});

postSchema.set('toJSON',{virtuals:true});
postSchema.set('toObject',{virtuals:true});

const postModel = mongoose.models.posts || mongoose.model("posts",postSchema);


export default postModel;