import React from 'react';
import { BiDotsVerticalRounded, BiWorld } from 'react-icons/bi';

const CommItem = (props) => {
  return (
    <div className="w-[90%] border-solid border-[1px] border-gray-200 rounded-md h-[140px] flex justify-between px-1">

    <div className='flex gap-4'>
    {/* The community profile */}
    <div className='flex items-center'>
        <img src={props.profile} className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full object-cover" />
    </div>
    
    <div className='pt-4'>
        <h2 className='font-sans font-bold text-md sm:text-lg leading-none pt-1'>{props.name}</h2>
    
        <p className='text-sm text-[#454545] flex items-center gap-1 leading-none pt-1'><BiWorld/> {props.privacy} community</p>
    
        <p className='text-sm text-[#454545] leading-none pt-1'>{props.followers?props.followers.length:"0"} followers</p>
    
        {/*the container for members and join button*/}
        <div className="flex">
        
       {/*container for the members*/}
       <div>
       {/* The members container */}
       <div className="flex items-center gap-11">
    
        <div className='sm:flex items-center gap-1 pt-2 hidden'>
          <img src="src/assets/g.jpg" className="w-[30px] h-[30px] object-cover rounded-full"/>
          <img src="src/assets/g.jpg" className="w-[30px] h-[30px] object-cover rounded-full"/>
          <img src="src/assets/g.jpg" className="w-[30px] h-[30px] object-cover rounded-full"/>
          <img src="src/assets/g.jpg" className="w-[30px] h-[30px] object-cover rounded-full"/>
          <img src="src/assets/g.jpg" className="w-[30px] h-[30px] object-cover rounded-full"/>
          <img src="src/assets/g.jpg" className="w-[30px] h-[30px] object-cover rounded-full"/>
        </div>
    
        {/* The join button */}
        <button className='font-sans text-home font-semibold border-solid border-[1px] border-home rounded-md py-1 px-5 text-sm mt-1'>join</button>
    
        </div>
    
        </div>
    
        </div>
    
    </div>
    
    </div>
    
    <div>
    <BiDotsVerticalRounded className='w-7 h-7 mt-2'/>
    </div>
    </div>
  )
}

export default CommItem;