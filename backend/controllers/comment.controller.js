import commentModel from "../models/comment.model.js";


//Add a new comment
const addComment = async (req,res)=>{
    try {

        const post_id= req.params.postId;

        const {comment,user_id,profile,username} = req.body;

        let newComment = new commentModel({
            author:user_id,
            comment:comment,
            post:post_id
        });

        let comm = await newComment.save();

        let commObj={
        author:{_id:user_id,
        profile:profile,
        username:username
             },
        comment:comm.comment,
        post:comm.post,
        createdAt:comm.createdAt,
        updatedAt:comm.updatedAt
        }

        res.status(201).json({success:true,message:"Comment added successfully",data:commObj});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

export {addComment}