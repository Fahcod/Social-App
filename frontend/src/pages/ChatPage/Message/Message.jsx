import React from 'react'

const Message = (props) => {
  return (
    <div className="w-full flex">

  <div className="bg-home dark:bg-[#222] mt-3 py-1 max-w-[85%] md:max-w-[42%] px-3 rounded-tr-[15px] rounded-bl-[15px]">
     <p className="text-sm text-white">{props.message}</p>
     <p className='text-end text-xs text-white leading-none py-[1px]'>10:20 AM</p>
   </div>

   </div>
  )
}

export default Message;