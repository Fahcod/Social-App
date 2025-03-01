import React from 'react'

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
        <h3 className='font-bold font-sans leading-none dark:text-white'>{props.author.username}</h3>
        <p className='text-xs text-[#454545] pt-[1px] dark:text-[#808080] leading-none'>1d ago</p>
     </div>
    </div>

    </div>

    <div>
        <p className='text-sm dark:text-white'>{props.comment}</p>
    </div>

    </div>
  )
}

export default Comment;