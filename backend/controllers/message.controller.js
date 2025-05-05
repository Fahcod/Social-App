import messageModel from "../models/message.model.js";
import { io,getUserSocket } from "../utils/socket.js";


//Send a message
const sendMessage = async (req,res)=>{
    try {

    const {message,user_id,receiver} = req.body;

    let newMessage = new messageModel({
        from:user_id,
        to:receiver,
        message:message
    });

    let mess = await newMessage.save();

    //get the user's socket id
    const userSocketId = getUserSocket(receiver);

    if(userSocketId){
        io.to(userSocketId).emit("new_message",mess);
    }

    res.json({success:true,message:mess});
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"An error occured"});
    }
}

//Get messages
const getChatMessages = async (req,res)=>{
try {

    const {user_id} = req.body;

    const receiver = req.params.otherId;
    
    let data = await messageModel.find({$or:[
        {from:user_id,to:receiver},{from:receiver,to:user_id}
    ]});

    res.json({success:true,messages:data})

} catch (error) {
    console.log(error)
    res.json({success:false,message:"An error occured"});
}
}

// update messages when read;
const updateSeenMessages = async (req,res)=>{
    try {

        const {user_id} = req.body;

        // update all the messages
        await messageModel.updateMany({to:user_id},{$set:{seen:true}});

        res.json({success:"true"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"An error occured"});
    }
}

export {sendMessage,getChatMessages,updateSeenMessages}