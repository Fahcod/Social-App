import React from 'react'
import { BiX } from 'react-icons/bi';
import NotificationBox from '../Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { showNotify } from '../../features/modelSlice';


const NotificationModel = () => {

    const notificationList = useSelector((state)=>state.user.notifications);

    const shower = useSelector((state)=>state.models.show_notify);

    const dispatch = useDispatch();

  return (
    <div className={`w-full z-[200] ${shower?`flex`:`hidden`} justify-end h-screen fixed top-0 bg-[#0202028c]`}>

   {/* The real container */}
    <div className="w-[100%] md:w-[30%] h-screen bg-white dark:bg-dark">

        <div className="flex justify-between items-center px-2 w-full h-[60px] border-solid border-b-[1px] border-gray-200 dark:border-[#333]">
        <h2 className="font-sans font-semibold text-lg dark:text-white">Notifications</h2>
        
        <div className="bg-[#efefef] dark:bg-[#333] w-8 h-8 rounded-full flex items-center justify-center" onClick={()=>dispatch(showNotify(false))}>
            <BiX className='w-6 h-6 dark:text-white'/>
        </div>

        </div>
        {/* End of the top header */}

        <div className="w-full px-3 flex flex-col gap-5 pt-2 h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-0">
        {notificationList.map((item,index)=>{
            return <NotificationBox key={index} _id={item._id} tag={item.tag} message={item.message}/>
        })}
        </div>

    </div>

    </div>
  )
}

export default NotificationModel;