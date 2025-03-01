import React, { useContext } from 'react';
import { SocialContext } from '../../../context/SocialContext';
import axios from "axios";
import {toast} from "react-toastify";

const TopProfile = (props) => {

    const {url,fetchAllUsers,fetchUser} = useContext(SocialContext);

  axios.defaults.withCredentials=true;

  async function followUser(){

    let response = await axios.put(`${url}/api/user/follow/${props._id}`,{});

    if(response.data.success){
    toast.success(response.data.message);
    fetchAllUsers();
    fetchUser();
    }else{
      toast.error(response.data.message);
    }

  }

  return (
    <div className='w-[100%] md:w-[90%] md:pt-3'>

    <div className='h-[160px] md:h-[250px]'>
        <img src={props.user?props.user.profile:""} className="rounded-md w-full h-[100%] object-cover"/>
    </div>
    {/* the end of the top image cont */}
    <div className="w-full flex justify-between items-center mt-[-30px] md:mt-[-56px]">

    {/* The profile cont */}
    <div className="flex gap-4 items-center pl-3">
    <div>
        <img src={props.user?props.user.profile:""} className='w-[110px] h-[110px] md:w-[160px] md:h-[160px] rounded-full object-cover'/>
    </div>
    <div className='hidden md:block'>
        <h2 className='font-sans font-bold text-lg dark:text-white'>{props.user?props.user.username:""}</h2>
        <p className='text-sm leading-none text-[#454545] dark:text-[#808080]'>followers {props.user?props.user.followers.length:""} following {props.user?props.user.following.length:""}</p>
    </div>
    </div>

    {/* The follow options */}
    <div className='mr-2 md:mr-0'>
       <button className="border-solid border-[1px] border-blue-600 rounded-md font-semibold text-blue-600 py-1 px-4" onClick={()=>followUser()}>Follow</button>
    </div>

    </div>
    {/* end of the profile top cont */}

    <div className='pt-1 pl-3'>
        <h2 className='font-sans font-bold text-lg dark:text-white'>{props.user?props.user.username:""}</h2>
        <p className='text-sm leading-none text-[#454545] dark:text-[#808080]'>followers {props.user?props.user.followers.length:""} following {props.user?props.user.following.length:""}</p>
    </div>

    <hr className='mt-4 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>
    
    <div className="flex items-center justify-between px-3 md:px-0 md:gap-24">
     <p className="font-sans font-semibold cursor-pointer text-md dark:text-white py-2">Home</p>
     <p className="font-sans font-semibold cursor-pointer text-md dark:text-white py-2">Images</p>
     <p className="font-sans font-semibold cursor-pointer text-md dark:text-white py-2">Videos</p>
     <p className="font-sans font-semibold cursor-pointer text-md dark:text-white py-2">More</p>
    </div>

    <hr className='mt-2 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    </div>
  )
}

export default TopProfile;