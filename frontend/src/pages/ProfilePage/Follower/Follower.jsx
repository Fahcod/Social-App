import React from 'react'

const Follower = ({profile,username}) => {
  return (
    <div className='flex justify-between w-full'>

    <div className="flex gap-2">
        <div>
            <img src={profile} className="w-[43px] h-[43px] rounded-full object-cover"/>
        </div>
        <div>
         <h2 className="font-sans text-md font-semibold dark:text-white">{username}</h2>
         <p className='text-sm text-[#454545] leading-none dark:text-[#777]'>345k followers</p>
        </div>
    </div>
   
   <div>
   <button className='text-xs text-white p-1 rounded-md bg-home'>view</button>
   </div>  

</div>
  );
}

export default Follower;