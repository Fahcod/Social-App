import React, { useContext } from 'react'
import { BiBell, BiHome,BiImage,BiLogOut} from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa6';
import {LuSettings} from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { SocialContext } from '../../../context/SocialContext';
import { toast } from 'react-toastify';

const Sidebar = () => {

  axios.defaults.withCredentials=true;

  const {url} = useContext(SocialContext);

  const navigate = useNavigate();

  const logOut= async()=>{

    let response = await axios.put(`${url}/api/user/logout`,{});

    if(response.data.success){
    navigate("/login")
    }else{
      toast.error(response.data.message)
    }

  }

  return (
    <div className='w-0 overflow-hidden md:w-[25%] bg-white dark:bg-dark fixed h-screen border-solid border-r-[1px] border-gray-200 dark:border-[#333]'>

        <div className="w-full flex dark:text-white flex-col gap-10 pl-6 pt-3">
                 
                 <Link to="/home">
                 <div className="flex items-center gap-4 cursor-pointer">
                    <BiHome className='w-7 h-7'/>
                    <p className='font-rubik text-lg pt-1'>Home</p>
                  </div>
                  </Link>
            
                  <div className="flex items-center gap-4 cursor-pointer">
                    <BiImage className='w-7 h-7'/>
                    <p className='font-rubik text-lg pt-1'>Gallery</p>
                  </div>


                  <div className="flex items-center gap-4 cursor-pointer">
                    <FaRegBookmark className='w-6 h-6'/>
                    <p className='font-rubik text-lg pt-1'>Saved</p>
                  </div>

                  <div className="flex items-center gap-4 cursor-pointer">
                    <BiBell className='w-7 h-7'/>
                    <p className='font-rubik text-lg pt-1'>Notifications</p>
                  </div>

                  <div className="flex items-center gap-4 cursor-pointer">
                    <LuSettings className='w-7 h-7'/>
                    <p className='font-rubik text-lg pt-1'>Settings</p>
                  </div>

                  <div className="flex items-center gap-4 cursor-pointer" onClick={()=>logOut()}>
                    <BiLogOut className='w-7 h-7'/>
                    <p className='font-rubik text-lg pt-1'>Logout</p>
                  </div>
        </div>
        {/* The end of the icon cont */}

        <hr className='mx-6 mt-6 outline-none border-none h-[1px] bg-gray-200 dark:bg-[#333]'/>
            
            <div className="flex flex-col gap-2 px-6 pt-3 text-[#454545] dark:text-[#808080]">
              <p className='font-rubik cursor-pointer'>Terms & conditions</p>
              <p className='font-rubik cursor-pointer'>Privacy policy</p>
              <p className='font-rubik cursor-pointer'>Feedback</p>
            </div>

    </div>
  )
}

export default Sidebar;