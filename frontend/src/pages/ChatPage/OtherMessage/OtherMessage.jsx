import React from 'react'

const OtherMessage = (props) => {
  return (
    <div className="w-full mt-3 flex justify-end">

   <div className="max-w-[65%] md:max-w-[45%]">
  <div className="bg-gray-300 w-full py-2 px-3 rounded-md ">
     <p className="text-sm font-rubik">{props.message}</p>
   </div>
   <p className="text-xs pt-1 text-[#454545]">10:24 AM</p>
   </div>

   </div>
  );
}

export default OtherMessage;