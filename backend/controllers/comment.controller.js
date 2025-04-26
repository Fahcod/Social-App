import commentModel from "../models/comment.model.js";
import { sendNotification } from "./notification.controller.js";


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

// Like a comment
const likeComment = async (req,res)=>{
    try {

    const {user_id,authorId,authorName,userName} = req.body;
    const commentId = req.params.commentId

    // find the comment
    let comment = await commentModel.findOne({_id:commentId});

    let newLikes = await comment.likes;

    // check if the user already liked the comment
    let likeCheck = newLikes.find(e=>e===user_id)

    if(likeCheck){
        newLikes = newLikes.filter((item)=>{
            return item !== user_id
        })
    }else{
        newLikes.push(user_id)
    }

    await commentModel.updateOne({_id:commentId},{$set:{likes:newLikes}});

    // send the notification to the user
    sendNotification(user_id,authorId,'Like',`Hi, ${authorName}, ${userName} liked your comment`);

    res.json({success:true,message:"Comment liked successfully"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

export {addComment,likeComment}