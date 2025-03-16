import React from 'react'
import ChatItem from '../ChatItem/ChatItem';
import { useSelector } from 'react-redux';
import { BiHome } from 'react-icons/bi';

const Sidebar = () => {

  const friendList = useSelector((state)=>state.user_info.friends);
  const users = useSelector((state)=>state.users.all_users);

  return (
    <div className="w-[100%] z-[200] md:z-0 md:w-[30%] fixed flex  bg-white dark:bg-dark h-screen border-solid border-r-[1px] border-gray-200 dark:border-[#333]">

    {/* The mini sidebar */}
    <div className="w-[20%] flex flex-col items-center justify-between h-full bg-home border-solid border-r-[1px] border-gray-200">

      {/* The top icon file */}
      <div className="flex flex-col items-center gap-12 pt-4">
      
      <div>
      <BiHome className='w-7 h-7 text-white'/>
      </div>

      <div>
      <BiHome className='w-7 h-7 text-white'/>
      </div>

      <div>
      <BiHome className='w-7 h-7 text-white'/>
      </div>

      <div>
      <BiHome className='w-7 h-7 text-white'/>
      </div>

      </div>

    </div>

    <div className="w-full pt-3 flex flex-col gap-3 px-3">
     {users.map((item,index)=>{
        if(friendList.includes(item._id)){
           return <ChatItem key={index} _id={item._id} user_bio={item.user_bio} profile={item.profile} username={item.username}/>
        }
     })}
     </div>
    </div>
  )
}

export default Sidebar;