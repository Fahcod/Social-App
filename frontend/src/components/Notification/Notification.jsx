import React, { useContext } from 'react'
import { BiX } from 'react-icons/bi';
import { SocialContext } from '../../context/SocialContext';

const NotificationBox = (props) => {

const {deleteNotification} = useContext(SocialContext);

  return (
    <div className='w-full bg-white pb-2 dark:bg-[#222]'>

        <div className="w-full flex items-center justify-between px-2 py-2">

            <h2 className="font-sans font-semibold text-md dark:text-white">{props.tag}</h2>

            <BiX className='w-6 h-6 cursor-pointer dark:text-white' onClick={()=>deleteNotification(props._id)}/>

        </div>

        <div className='w-full px-2'>
            <p className="text-sm text-[#454545] dark:text-[#a8a7a7]">{props.message}</p>
        </div>

    </div>
  )
}

export default NotificationBox;