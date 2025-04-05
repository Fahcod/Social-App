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
         <p className='text-sm text-[#454545] leading-none dark:text-[#777]'>@{username}</p>
        </div>
    </div>  

</div>
  );
}

export default Follower;