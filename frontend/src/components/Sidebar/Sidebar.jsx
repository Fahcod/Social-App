import React from 'react'
import { BiBell,BiGroup, BiHome, BiImage, BiLogoShopify, BiMessageSquareDots } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='w-0 overflow-hidden md:w-[25%] dark:bg-dark 2xl:w-[15%] bg-white h-screen fixed 2xl:fixed border-solid border-r-[1px] border-gray-200 dark:border-[#333] 2xl:border-l-[1px]'>
    
    {/* The sidebar links*/}
    <div className="w-full pt-3 flex flex-col gap-10 pl-6 dark:text-white">

      <div className="flex items-center gap-4 cursor-pointer">
        <BiHome className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Home</p>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <BiImage className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Gallery</p>
      </div>

      <Link to="/friends">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiGroup className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Friends</p>
      </div>
      </Link>

      
      <div className="flex items-center gap-4 cursor-pointer">
        <FaRegBookmark className='w-6 h-6'/>
        <p className='font-sans text-xl pt-1'>Saved</p>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <MdOndemandVideo className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Videos</p>
      </div>

      <Link to="/messaging">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiMessageSquareDots className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Messaging</p>
      </div>
      </Link>

      <Link to="/notifications">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiBell className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Notifications</p>
      </div>
      </Link>

    </div>
    {/* Emd of the links */}

    </div>
  )
}

export default Sidebar;