import React from 'react'
import { BiBell,BiGroup, BiHome,BiMenu,BiMessageSquareDots } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import { MdOndemandVideo } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { showNotify } from '../../features/modelSlice';
import { Link } from 'react-router-dom';
import { getUnreadMessages } from '../../utils/messages';

const Sidebar = () => {

  const user = useSelector((state)=>state.user)
  const messages = useSelector((state)=>state.messages.all_messages)
  const dispatch = useDispatch();

  // get the message length
  const messageLength = getUnreadMessages(messages,user._id)

  return (
    <div className='w-0 overflow-hidden md:w-[25%] dark:bg-dark 2xl:w-[15%] bg-[#fff] h-screen fixed 2xl:fixed border-solid border-r-[1px] border-gray-200 dark:border-[#333] 2xl:border-l-[1px]'>
    
    {/* The sidebar links*/}
    <div className="w-full pt-3 flex flex-col gap-9 pl-6 dark:text-white">
      
      <Link to="/home">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiHome className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Home</p>
      </div>
      </Link>

      <div className="relative flex items-center gap-4 cursor-pointer">
        <BiGroup className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Friends</p>
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1 left-0"></div>
      </div>
      
      <div className="flex items-center gap-4 cursor-pointer">
        <FaRegBookmark className='w-6 h-6'/>
        <p className='font-sans text-xl pt-1'>Saved</p>
      </div>

      <Link to="/videos">
      <div className="flex items-center gap-4 cursor-pointer">
        <MdOndemandVideo className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Videos</p>
      </div>
      </Link>

      <Link to="/messaging">
      <div className="relative flex items-center gap-4 cursor-pointer">
        <BiMessageSquareDots className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Messaging</p>
        {messageLength>0?<div className="w-3 h-3 absolute left-0 top-0 bg-red-500 rounded-full"></div>:<></>}
      </div>
      </Link>
     
      <div className="flex items-center gap-4 cursor-pointer" onClick={()=>dispatch(showNotify(true))}>
        <div className="relative">
        <BiBell className='w-7 h-7'/>
        <div className="w-3 h-3 absolute left-0 top-0 bg-red-500 rounded-full"></div>
        </div>
        <p className='font-sans text-xl pt-1'>Notifications</p>
      </div>

      <Link to="/communities">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiGroup className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Communities</p>
      </div>
      </Link>

      <div className="flex items-center gap-4 cursor-pointer">
        <BiMenu className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>More</p>
      </div>

    </div>
    {/* Emd of the links */}

    </div>
  )
}

export default Sidebar;