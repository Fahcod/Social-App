import communityModel from "../models/community.model.js";

//create a community
const createCommunity = async (req,res)=>{
    try {

        const {user_id,name,description,privacy} = req.body;

        const URL=`http://localhost:7000/videos/${req.file.filename}`

        let newCommunity = new communityModel({
        admin:user_id,
        name:name,
        profile:URL,
        privacy:privacy,
        description:description,
        });

       let new_comm = await newCommunity.save();

       res.status(201).json({success:true,message:"Channel created successfully",data:new_comm});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

//fetch all channels
const getChannels = async (req,res)=>{
    try {

        let data = await communityModel.find();

        res.status(200).json({success:true,channels:data})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"}); 
    }
}

//Add community member
const addMember = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"}); 
    }
}

export {createCommunity,getChannels,addMember}