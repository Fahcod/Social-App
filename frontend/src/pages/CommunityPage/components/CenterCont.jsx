import React from 'react'
import { BiWorld } from 'react-icons/bi';
import Home from '../pages/Home';

const CenterCont = ({communityData}) => {
  return (
  <div className="md:ml-[25%] w-[100%] md:w-[50%] h-screen md:pt-3 flex flex-col items-center">

    {/* The top cont */}
    <div className="md:w-[90%] w-[100%]">

    <img src={communityData?communityData.profile:""} className="object-cover w-full md:rounded-md h-[200px] md:h-[250px]"/>

    {/* the next div */}
    <div className="hidden md:flex gap-4">

    <div>
        <img src={communityData?communityData.profile:""} className="border-solid border-[2px] border-white ml-2 mt-[-60px] w-[120px] h-[120px] md:w-[140px] rounded-full md:h-[140px] object-cover"/>
    </div>

    <div className='pt-2'>
        <h2 className="font-sans font-bold text-lg">{communityData?communityData.name:""}</h2>

        <div className="">
        <p className="text-sm text-[#454545] leading-none">{communityData?communityData.followers.length:""} followers  {communityData?communityData.members.length:""} members</p>
        <div className='flex items-center text-sm pt-[2px] leading-none text-[#454545] gap-1'><BiWorld/>{communityData?communityData.privacy:""} community</div>
        </div>

        {/* the div for members and follow button */}
        <div className="flex items-center pt-2 gap-7">

        <div className="flex items-center gap-1">
        
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>

        </div>

        {/* the follow button */}
        <button className="font-sans font-semibold text-home rounded-md px-3 py-1 border-solid border-[1px] border-home">following</button>

        </div>
       
    </div>

    </div>
    {/* end of the next div */}

   {/* the div to display on smaller screens for responsiveness */}
    <div className='pt-2 px-3'>
        <h2 className="font-sans font-bold text-lg">{communityData?communityData.name:""}</h2>

        <div className="">
        <p className="text-sm text-[#454545] leading-none">{communityData?communityData.followers.length:""} followers  {communityData?communityData.members.length:""} members</p>
        <div className='flex items-center text-sm pt-[2px] leading-none text-[#454545] gap-1'><BiWorld/>{communityData?communityData.privacy:""} community</div>
        </div>

        {/* the div for members and follow button */}
        <div className="flex items-center pt-2 gap-7">

        <div className="flex items-center gap-1">
        
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>
        <div className=''>
            <img src={communityData?communityData.profile:""} className="w-[32px] h-[32px] rounded-full object-cover"/>
        </div>

        </div>

        {/* the follow button */}
        <button className="font-sans font-semibold text-home rounded-md px-3 py-1 border-solid border-[1px] border-home">following</button>

        </div>
       
    </div>

    {/* the end of the small screen profile display*/}

    <hr className='mt-3'/>

    <div className="flex items-center justify-between md:justify-[unset] md:gap-12 pt-2 px-2">
    <p className="font-sans font-semibold text-[14px] md:text-md">Home</p>
    <p className="font-sans font-semibold text-[14px] md:text-md">Images</p>
    <p className="font-sans font-semibold text-[14px] md:text-md">Videos</p>
    <p className="font-sans font-semibold text-[14px] md:text-md">More</p>
    </div>

    <hr className='mt-2'/>

    </div>

    {/* end of the top cont */}
    

    {/* the div for the pages */}
    <div className="w-[100%] md:w-[90%]">
    <Home/>
    </div>

  </div>
  )
}

export default CenterCont;