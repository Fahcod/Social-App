import React from 'react'

const Message = (props) => {
  return (
    <div className="w-full flex pt-6">
  
  <div className="max-w-[65%] md:max-w-[45%]">
  <div className="bg-home w-full py-2 px-3 rounded-md ">
     <p className="text-sm text-white">{props.message}</p>
   </div>
   <p className="text-xs pt-1 text-[#454545]">10:24 AM</p>
   </div>
  
   </div>
  )
}

export default Message;