import React from 'react'
import { useSelector } from 'react-redux';

const Rightbar = () => {

  const currentChat = useSelector((state)=>state.user.current_chat);

  return (
    <div className='bg-white translate-x-full md:translate-x-0 dark:bg-dark fixed right-0 h-screen w-[25%] border-solid border-[1px] border-gray-200 dark:border-[#333]'>
    
    {/* <div className="w-full flex justify-between px-4 h-[60px] items-center">
      <h2 className='font-sans font-semibold'>Friend info</h2>
      <p>view profile</p>
    </div>

    <div className="w-full flex justify-center">
      <img src={currentChat.profile?currentChat.profile:<div className='w-[150px] h-[150px] rouned-full bg-[#efefef]'></div>} className="w-[150px] h-[150px] rounded-full object-cover"/>
    </div>

    <div className='w-full'>
    <h2 className='text-center font-sans font-bold'>{currentChat?currentChat.username:""}</h2>
    <p className='text-center text-sm leading-none'>A proud socialhub user</p>
    </div>
    <hr className='mx-4 mt-3'/>

    <div className="w-full px-4 flex flex-col gap-5">

      <div className="flex gap-2 items-center">
        
      </div>

    </div> */}

    </div>
  )
}

export default Rightbar;