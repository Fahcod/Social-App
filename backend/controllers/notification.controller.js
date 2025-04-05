import notificationModel from "../models/notification.model.js";
import {io,getUserSocket} from "../utils/socket.js"

// function to send a notification
const sendNotification = async (from,to,tag,message)=>{

    //Send a notification to the user
    const newNotify = new notificationModel({
        to:to,
        from:from,
        message:message,
        tag:tag
        });

        let data = await newNotify.save();

        //Get the user online
        const userSocketId = getUserSocket(otherId);

        if(userSocketId){
            io.to(userSocketId).emit("new_notify",data);
        }

}

//get user notifications
const getNotifications = async (req,res)=>{
    try {

    const {user_id} = req.body;

    //fetch the notifications
    let result = await notificationModel.find({to:user_id});

    res.status(200).json({success:true,data:result})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

//Function to delete the notification
const deleteNotification = async (req,res)=>{
    try {

        const notificationId = req.params.Id;

        await notificationModel.deleteOne({_id:notificationId});

        res.status(201).json({success:true,message:"Notification deleted successfully"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}


export {getNotifications,deleteNotification,sendNotification}