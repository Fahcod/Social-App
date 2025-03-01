import React, { useContext } from 'react';
import { BiGroup, BiHome, BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import {LuSettings} from "react-icons/lu"
import { FaRegBookmark } from 'react-icons/fa6';
import axios from "axios";
import { SocialContext } from '../../context/SocialContext';

const ProfileNav = () => {

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
    <div className='flex dark:bg-dark dark:text-white items-center justify-between px-4 md:hidden w-full h-[60px] fixed bottom-0 bg-white border-solid border-t-[1px] border-gray-200 dark:border-[#333]'>
     
     <Link to="/">
     <div>
     <BiHome className='w-7 h-7'/>
     </div>
     </Link>

     <Link to="/channels">
     <div>
     <BiGroup className='w-7 h-7'/>
     </div>
     </Link>

     <div>
     <FaRegBookmark className='w-6 h-6'/>
     </div>

     <Link to="/messaging">
     <div>
     <LuSettings className='w-7 h-7'/>
     </div>
     </Link>

     <div onClick={()=>logOut()}>
     <BiLogOut className='w-7 h-7'/>
     </div>

    </div>
  );
}

export default ProfileNav;