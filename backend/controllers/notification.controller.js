import notificationModel from "../models/notification.model.js";


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

export {getNotifications,deleteNotification}