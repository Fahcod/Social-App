import React from 'react';
import { useSelector } from 'react-redux';
import Follower from '../Follower/Follower';

const RightBar = () => {

  const followers = useSelector((state)=>state.user_info.followers);

  return (
    <div className='w-0 overflow-hidden md:w-[25%] dark:bg-dark h-screen fixed right-0 bg-white border-solid border-l-[1px] border-gray-200 dark:border-[#333]'>
    
    <div className="px-6 flex items-center justify-between">
        <h2 className='font-sans py-2 dark:text-[#808080]'>Followers</h2>
        <p className="text-blue-600 text-sm cursor-pointer">view all</p>
    </div>
    {/* The followers cont */}
    <div className="w-full px-6 flex flex-col gap-4 h-[40vh]">
   {followers.slice(-5).map((item,index)=>{
    return <Follower key={index} profile={item.profile} username={item.username}/>
   })}
    </div>
    {/* The end of followers */}
    <hr className="mt-3 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333] mx-6"/>


    </div>
  )
}

export default RightBar;