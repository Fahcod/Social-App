import commentModel from "../models/comment.model.js";


//Add a new comment
const addComment = async (req,res)=>{
    try {

        const post_id= req.params.postId;

        const {comment,user_id} = req.body;

        let newComment = new commentModel({
            author:user_id,
            comment:comment,
            post:post_id
        });

        await newComment.save();

        res.status(201).json({success:true,message:"Comment added successfully"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

export {addComment}