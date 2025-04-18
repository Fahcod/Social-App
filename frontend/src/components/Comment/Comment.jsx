import React from 'react';
import {BsHeart,BsRepeat} from "react-icons/bs";
import {GoComment} from "react-icons/go"; 

const Comment = (props) => {
  return (
    <div className='w-full mt-5'>
    {/* The header */}
    <div className="flex w-full justify-between">

    {/* The profile information */}
    <div className="flex gap-2">
     <div>
        <img src={props.author.profile} className="flex-shrink-0 w-[35px] h-[35px] rounded-full object-cover"/>
     </div>
     <div>
        <h3 className='font-semibold font-sans md:text-md leading-none dark:text-white'>{props.author.username}</h3>
        <p className='text-xs text-[#454545] pt-[1px] dark:text-[#808080] leading-none'>1d ago</p>
     </div>
    </div>

    </div>

    <div>
        <p className='text-sm dark:text-white pt-1'>{props.comment}</p>
    </div>

    {/* The comment options */}
    <div className="w-full flex gap-5 md:gap-10 pt-2">

                <div className='flex items-center gap-1'>
                <BsHeart className='w-4 h-4 dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">likes(0)</p>
                </div>

                <div className='flex items-center gap-1'>
                <BsRepeat className='w-5 h-5 dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">reposts(0)</p>
                </div>

                <div className='flex items-center gap-1'>
                <GoComment className='w-5 h-5 dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">rplies(0)</p>
                </div>
    </div>

    <hr className='mt-3'/>

    </div>
  )
}

export default Comment;