import React from 'react'
import ChatItem from '../ChatItem/ChatItem';
import { useSelector } from 'react-redux';
import { BiBell,BiDotsVerticalRounded,BiGroup, BiHome,BiMenu,BiMessageSquareDots } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';
import BottomNav from '../../../components/PhoneComponents/BottomNav';

const SideFriends = () => {

  const friendList = useSelector((state)=>state.user_info.friends);
  const users = useSelector((state)=>state.users.all_users);

  const shower = useSelector((state)=>state.sliders.show_contacts);

  return (
    <div className={`w-[100%] z-[100] duration-700 ${shower?`translate-x-0`:`translate-x-[100%] md:translate-x-0`} md:z-[unset] md:w-[30%] fixed flex  bg-white dark:bg-dark h-screen border-solid border-r-[1px] border-gray-200 dark:border-[#333]`}>
    <div className="w-[18%] hidden md:flex flex-col gap-11 pt-6 items-center h-screen border border-r border-gray-200">
    <Link to="/home">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiHome className='w-7 h-7'/>
      </div>
      </Link>
      <div className="flex items-center gap-4 cursor-pointer">
        <BiGroup className='w-7 h-7'/>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <FaRegBookmark className='w-6 h-6'/>
      </div>
      <Link to="/videos">
      <div className="flex items-center gap-4 cursor-pointer">
        <MdOndemandVideo className='w-7 h-7'/>
      </div>
      </Link>
      <Link to="/messaging">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiMessageSquareDots className='w-7 h-7'/>
      </div>
      </Link>
      <div className="flex items-center gap-4 cursor-pointer">
        <BiBell className='w-7 h-7'/>
      </div>
      <Link to="/communities">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiGroup className='w-7 h-7'/>
      </div>
      </Link>
      <div className="flex items-center gap-4 cursor-pointer">
        <BiMenu className='w-7 h-7'/>
      </div>
    </div>
    <div className="w-[100%] md:w-[80%]  ">
    <div className="w-full flex items-center justify-between px-4 h-[60px] border-solid border-b border-gray-200">
    <h2 className="text-xl font-bold">Friends</h2>
    <BiDotsVerticalRounded className='w-7 h-7 cursor-pointer font-sans'/>
    </div>
    <div className='flex pt-2 flex-col gap-3 px-3 h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden md:pb-36 pb-24'>
     {users.map((item,index)=>{
        if(friendList.includes(item._id)){
        return <ChatItem key={index} _id={item._id} user_bio={item.user_bio} profile={item.profile} username={item.username}/>
        }
     })}
     </div>
     </div>
     <BottomNav/>
    </div>
  );
}

export default SideFriends;