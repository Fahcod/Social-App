import React from 'react'
import { useSelector } from 'react-redux';
import SuggestCont from '../SuggestCont/SuggestCont';


const RightBar = () => {

  const users = useSelector((state)=>state.users.all_users);

  const userData = useSelector((state)=>state.user);

  const following = useSelector((state)=>state.user_info.following);

  const turnIds = following.map((item)=>{
  return item._id
  });

  const notFollowed = users.map((item)=>{
   if(!turnIds.includes(item._id)){
    return item
   }
  });

  const exactNotFollow = notFollowed.filter((item)=>{
  return item !== undefined
  }); 

  const lastNotFollow=exactNotFollow.slice(-4);

  return (
    <div className='w-0 overflow-hidden md:w-[25%] 2xl:w-[15%] dark:bg-dark 2xl:mr-[20%] h-screen bg-white fixed right-0 border-solid border-l-[1px] border-r-[1px] border-gray-200 dark:border-[#333]'>
    
    {/* The div for the suggested contacts */}
    <div className="w-full pl-5 pt-3">
    <div>
      <h2 className='font-sans text-[#454545] text-[18px] dark:text-[#777]'>Suggested accounts</h2>
    </div>

    <div className="w-full flex flex-col gap-5 pt-3">
    {lastNotFollow.map((item,index)=>{
      if(item._id !== userData._id){
        return <SuggestCont key={index} _id={item._id} profile={item.profile} username={item.username}/>
      }
    })}
    </div>

    </div>
    <hr className='dark:outline-none dark:border-none mt-3 mx-5 dark:bg-[#333] dark:h-[1px]'/>

    </div>
  )
}

export default RightBar;