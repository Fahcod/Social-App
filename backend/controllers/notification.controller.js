import notificationModel from "../models/notification.model.js";


//get user notifications
const getNotifications = async (req,res)=>{
    try {

    const {user_id} = req.body;

    //fetch the notifications
    let result = await notificationModel.find({to:user_id}).populate("from","profile username email")

    res.status(200).json({success:true,data:result})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An error occured"});
    }
}

export {getNotifications}