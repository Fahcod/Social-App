import postModel from "../models/post.model.js";
import { cloudinary } from "../utils/cloudinary.js";


//The function bellow will be creating an image post
const createImagePost = async (req,res)=>{
    try {

        const {text,user_id} = req.body;

       async function savePost(URL){

        let newPost = new postModel({
            owner:user_id,
            post_type:'image',
            text:text,
            post_value:URL
            });
    
            let post = await newPost.save();
    
            res.status(201).json({success:true,post:post,message:"Post created successfully"});
       }

       cloudinary.uploader.upload(req.file.path,function (err,result){
       
        if(err){
        return res.json({success:false,message:"Error uploading image"});
        }

        savePost(result.secure_url);

       })
       
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"});
    }
}


//The function bellow will be creating an video post
const createVideoPost = async (req,res)=>{
    try {

        const {text,user_id} = req.body;
       
        async function savePost(URL){
            let newPost = new postModel({
                owner:user_id,
                post_type:'video',
                text:text,
                post_value:URL
                });
        
                let post = await newPost.save();
        
                res.status(201).json({success:true,post:post,message:"Post created successfully"});    
        }

        cloudinary.uploader.upload(req.file.path,{resource_type:'video',
            eager:[
                {width:650, height:480 , crop:'pad'}
            ],
            eager_async:true
        }).then((result)=>{
        savePost(result.secure_url);

        }).catch(()=>{
            return res.json({success:false,message:"Error uploading video"});
        })
        
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"});
    }
}

//Create a text post
const createTextPost = async (req,res)=>{
    try {

        const {user_id,text} = req.body;

        let newPost = new postModel({
            owner:user_id,
            post_type:'text',
            text:text,
            });
        
            let post = await newPost.save();
        
            res.json({success:true,post:post,message:"Post uploaded successfully"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"}); 
    }
}


//Fetch posts
const getAllPosts = async (req,res)=>{
    try {

       let result = await postModel.find().populate("owner","username _id profile").populate({
        path:"comments",
        populate:{path:'author',select:'username profile _id'}
       }).exec();

       res.status(200).json({success:true,posts:result});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"});
    }
}

//Like a post
const likePost = async (req,res)=>{
    try {

        const {user_id}=req.body;

        const postId = req.params.postId;

        //Find the post
        let post = await postModel.findById(postId);

        let newLikes = await post.likes;

        //Check if the user already liked
        let likeCheck = newLikes.find(e=>e === user_id);

        if(likeCheck){
            newLikes = newLikes.filter((item)=>{
                return item != user_id;
            });
        }else{
        //else, push the id
        newLikes.push(user_id)
        };

        //update the post
        await postModel.updateOne({_id:postId},{$set:{likes:newLikes}});

        res.json({success:true});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"});
    }
}

//Delete post
const deletePost = async (req,res)=>{
    try {
        const {user_id} = req.body;

        //get the post id
        const postId = req.params.postId;

        //find the post
        let post = await postModel.findById(postId);

        console.log(user_id,post.owner);

        //check if the user is the owner
        const ownerCheck = post.owner == user_id;

        if(!ownerCheck){
            return res.json({success:false,message:"This post isn't yours"});
        }

        await postModel.deleteOne({_id:postId}).exec();
        
        res.json({success:true,message:"Post deleted successfully"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"});  
    }
}

//Like a post
const UpdateViews = async (req,res)=>{
    try {

        const postId = req.params.postId;

        const {user_id} = req.body;

        //find the post
        let post = await postModel.findById(postId);

        if(!post){
            return res.json({success:false,message:"Post could not be found"});
        }

        //Get the post views
        let newViews = await post.views;

        //Check for the user id
        let viewCheck = newViews.find(e=>e===user_id);

        if(viewCheck){
        return res.json({success:false,message:"The post was viewed already"});
        }

        newViews.push(user_id);

        //update the post
        await postModel.updateOne({_id:postId},{$set:{views:newViews}});

        res.json({success:true,message:"Post viwed successfully"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"});  
    }
}

//The repost funcionality

// The image reposting func
const repostImage = async (req,res)=>{
    try {
    
    const {text,user_id,image_url} = req.body;

    let newPost = new postModel({
        owner:user_id,
        post_type:'image',
        text:text,
        post_value:image_url
        });

    let post = await newPost.save();

    res.status(201).json({success:true,message:"Reposted successfully",data:post});
   
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"}); 
    }
}

//The text reposting func

const repostText = async (req,res)=>{
    try {

        const {user_id,text} = req.body;

        let newPost = new postModel({
            owner:user_id,
            post_type:'text',
            text:text,
            });
        
            let post = await newPost.save();
        
            res.json({success:true,data:post,message:"Reposted successfully"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error ocuured"}); 
    }
}

export {createVideoPost,createImagePost,getAllPosts,createTextPost,likePost,deletePost,UpdateViews,repostImage,repostText}

  