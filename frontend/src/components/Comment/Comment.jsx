import React from 'react';
import {BiShare,BiComment,BiRepost,BiHeart} from "react-icons/bi";

const Comment = (props) => {
  return (
    <div className='w-full'>
    {/* The header */}
    <div className="flex w-full justify-between">

    {/* The profile information */}
    <div className="flex gap-2">
     <div>
        <img src={props.author.profile} className="flex-shrink-0 w-[35px] h-[35px] rounded-full object-cover"/>
     </div>
     <div>
        <h3 className='font-semibold font-sans leading-none dark:text-white'>{props.author.username}</h3>
        <p className='text-xs text-[#454545] pt-[1px] dark:text-[#808080] leading-none'>1d ago</p>
     </div>
    </div>

    </div>

    <div>
        <p className='text-sm dark:text-white pt-1'>{props.comment}</p>
    </div>

    {/* The comment options */}
    <div className="w-full flex justify-between pt-2">

                <div className='flex items-center gap-1'>
                <BiHeart className='w-5 h-5 dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">6k</p>
                </div>

                <div className='flex items-center gap-1'>
                <BiComment className='w-5 h-5 dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">34k</p>
                </div>
    
                <div className='flex items-center gap-1'>
                <BiRepost className='w-6 h-6 dark:text-[#808080]'/>
                </div>
    
                <div className='flex items-center gap-1'>
                <BiShare className="w-6 h-6 dark:text-[#808080]"/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">282k</p>
                </div>

    </div>

    {/* The bottom div */}
    <hr className='mt-3 dark:outline-none dark:border-none dark:h-[1px] dark:bg-[#333]'/>

    </div>
  )
}

export default Comment;