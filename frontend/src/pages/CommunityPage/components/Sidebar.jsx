import React from 'react'
import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-0 overflow-hidden md:w-[25%] md:overflow-y-auto [&::-webkit-scrollbar]:w-0 h-screen fixed border-solid border-r-[1px] border-gray-200 pt-3'>

       <div className="px-6">

      <Link to="/home">
      <div className="flex items-center gap-4 cursor-pointer">
        <BiHome className='w-7 h-7'/>
        <p className='font-sans text-xl pt-1'>Home</p>
      </div>
      </Link>

      </div>

      <hr className='mx-6 mt-3'/>

      {/* the admin section */}
      <div className="w-full px-6">

        <div className="pt-3">
            <h2 className="font-sans font-bold text-xl">Manage community</h2>
        </div>

        <div className="flex flex-col gap-5 pt-2">

        <div className="cursor-pointer">
        <p className="">Joined members</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Pending posts</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Community rules</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Invite a member</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Edit profile</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Delete community</p>
        </div>

        </div>

      </div>
      {/* the end of the admin section */}

      <hr className='mx-6 mt-3'/>


      {/* the admin section */}
      <div className="w-full px-6">

        <div className="pt-3">
            <h2 className="font-sans font-bold text-xl">Member previledges</h2>
        </div>

        <div className="flex flex-col gap-5 pt-2">

        <div className="cursor-pointer">
        <p className="">Joined members</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Pending posts</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Community rules</p>
        </div>

        <div className="cursor-pointer">
        <p className="">Community rules</p>
        </div>

        </div>

      </div>
      {/* the end of the admin section */}


    </div>
  )
}

export default Sidebar;