import React from 'react';

const FollowingItem = ({profile,_id,username}) => {
  return (
    <div className='flex justify-between'>

        <div className="flex gap-2">
            <div>
                <img src={profile} className="w-[43px] h-[43px] rounded-full object-cover"/>
            </div>
            <div>
             <h2 className="font-sans text-md font-semibold dark:text-white">{username}</h2>
             <p className='text-sm text-[#454545] leading-none dark:text-[#777]'>345k followers</p>
            </div>
        </div>

    </div>
  )
}

export default FollowingItem;