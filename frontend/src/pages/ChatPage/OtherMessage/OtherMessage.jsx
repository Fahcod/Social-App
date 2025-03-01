import React from 'react'

const OtherMessage = (props) => {
  return (
    <div className="w-full mt-3 flex justify-end">

     <div className="max-w-[42%] bg-blue-200 dark:bg-[#333] py-1 px-3 rounded-tr-[15px] rounded-bl-[15px]">
     <p className="text-sm dark:text-white">{props.message}</p>
     <p className='text-[#fff] text-end text-xs leading-none py-[2px]'>10:20 AM</p>
   </div>

   </div>
  );
}

export default OtherMessage;