import React from 'react'
import ChatItem from '../ChatItem/ChatItem';
import { useSelector } from 'react-redux';

const SideFriends = () => {

  const friendList = useSelector((state)=>state.user_info.friends);
  const users = useSelector((state)=>state.users.all_users);

  const shower = useSelector((state)=>state.sliders.show_contacts);

  return (
    <div className={`w-[100%] z-[100] duration-700 ${shower?`translate-x-0`:`translate-x-[100%] md:translate-x-0`} md:z-[unset] md:w-[25%] fixed flex  bg-white dark:bg-dark h-screen border-solid border-r-[1px] border-gray-200 dark:border-[#333]`}>
    <div className="w-full pt-3 flex flex-col gap-3 px-3">
     {users.map((item,index)=>{
        if(friendList.includes(item._id)){
        return <ChatItem key={index} _id={item._id} user_bio={item.user_bio} profile={item.profile} username={item.username}/>
        }
     })}
     </div>

    </div>
  );
}

export default SideFriends;