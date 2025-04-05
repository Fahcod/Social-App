import communityModel from "../models/community.model.js";
import {cloudinary} from "../utils/cloudinary.js"

//create a community
const createCommunity = async (req,res)=>{
    try {

        const {user_id,name,description,privacy} = req.body;

        // function to save the community
        async function saveCommunity(URL){

        let newCommunity = new communityModel({
        admin:user_id,
        name:name,
        profile:URL,
        privacy:privacy,
        description:description,
        members:[user_id]
        });
        
        let new_comm = await newCommunity.save();
        
        res.status(201).json({success:true,message:"Channel created successfully",data:new_comm});
        
    }

    cloudinary.uploader.upload(req.file.path,function(err,result){
    
        if(err){
            return res.json({success:false,message:"Error uploading profile image"})
        }

        saveCommunity(result.secure_url);
    });

        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

//fetch all channels
const getChannels = async (req,res)=>{
    try {

        let data = await communityModel.find().populate("members","username profile");

        res.status(200).json({success:true,channels:data})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"}); 
    }
}

//Add community member
const joinCommunity = async (req,res)=>{
    try {

    const {communityId} = req.params;

    const {user_id} = req.body;

    // first of all, find the community
    let community = await communityModel.findById(communityId);

    // acccess all community members
    let members = await community.members;

    // check if the user already exists
    let memberCheck = members.find(e=>e == user_id);

    if(memberCheck){
        return res.json({success:false,message:"You are a member already"});
    }

    // if not then add the member
    members.push(user_id);

    // update the communit members and send the user a notification
    await communityModel.updateOne({_id:communityId},{$set:{members:members}});

    res.json({success:true,message:"You joined successfully"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"}); 
    }
}

//follow community
const followCommunity = async (req,res)=>{
    try {

        // get the community id
        const {communityId} = req.params

        const {user_id}=req.body;

        // find the community
        let community = await communityModel.findById(communityId);

        // get the followers
        let followers = await community.followers;

        // check if the user 
        let followCheck = followers.find(e=>e == user_id);

        if(followCheck){
            return res.json({success:false,message:"You are already following"})
        }

        // if the user is not following,add a follower
        followers.push(user_id);

        await communityModel.updateOne({_id:communityId},{$set:{followers:followers}});

        res.json({success:true,message:"You followed successfully"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"}); 
    }
}

export {createCommunity,getChannels,joinCommunity,followCommunity}