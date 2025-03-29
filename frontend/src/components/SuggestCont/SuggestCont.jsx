import React, { useContext } from 'react';
import axios from "axios";
import { SocialContext } from '../../context/SocialContext';
import { toast } from 'react-toastify';

const SuggestCont = ({profile,username,_id}) => {

  const {url,fetchAllUsers,fetchUser} = useContext(SocialContext);

  axios.defaults.withCredentials=true;

  async function followUser(){

    let response = await axios.put(`${url}/api/user/follow/${_id}`,{});

    if(response.data.success){
    toast.success(response.data.message);
    fetchAllUsers();
    fetchUser();
    }else{
      toast.error(response.data.message);
    }

  }

  return (
    <div className='flex justify-between'>

        <div className="flex gap-2">
            <div>
                <img src={profile} className="w-[43px] h-[43px] rounded-full object-cover"/>
            </div>
            <div>
             <h2 className="font-sans text-md font-semibold dark:text-white">{username}</h2>
             <p className='text-sm text-[#454545] leading-none dark:text-[#777]'>@{username}</p>
            </div>
        </div>
       
       <div className='pr-5'>
       <button className='text-xs text-white p-1 rounded-md bg-home' onClick={()=>followUser()}>follow</button>
       </div>  

    </div>
  )
}

export default SuggestCont;