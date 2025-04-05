import React, { useContext } from 'react';
import { BiDotsVerticalRounded, BiWorld } from 'react-icons/bi';
import axios from "axios";
import {SocialContext} from "../../../context/SocialContext"
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const CommItem = (props) => {

  axios.defaults.withCredentials=true;

  const {url,fetchAllCommunities} = useContext(SocialContext);

  //function to join the community
  async function joinCommunity(){

  let response = await axios.put(`${url}/api/community/join/${props._id}`);
  
      if(response.data.success){
          toast.success(response.data.message);
          fetchAllCommunities()
      }else{
          toast.error(response.data.message);
      }
  
  }
  
  //function to follow the community
  async function followCommunity(){

    let response = await axios.put(`${url}/api/community/follow/${props._id}`);
    
        if(response.data.success){
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message);
        }
    
    }

    //generate community members
    let allMembers = props.members;

    //slice the mebers to five of them
    let sliced_members = allMembers.slice(-5);

    const navigate = useNavigate();

  return (
    <div className="w-[90%] border-solid border-[1px] border-gray-200 rounded-md h-[140px] flex justify-between px-1">

    <div className='flex gap-4'>
    {/* The community profile */}
    <div className='flex items-center' onClick={()=>navigate(`/community/${props._id}`)}>
        <img src={props.profile} className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full object-cover" />
    </div>
    
    <div className='pt-4'>
        <h2 className='font-sans font-semibold sm:font-bold text-md sm:text-lg leading-none pt-1'>{props.name}</h2>
    
        <p className='text-sm text-[#454545] flex items-center gap-1 leading-none pt-1'><BiWorld/> {props.privacy} community</p>
    
        <p className='text-sm text-[#454545] leading-none pt-1'>{props.followers?props.followers.length:"0"} followers</p>
    
        {/*the container for members and join button*/}
        <div className="flex">
        
       {/*container for the members*/}
       <div>
       {/* The members container */}
       <div className="flex items-center gap-11">
    
        <div className='sm:flex items-center gap-1 pt-2 hidden'>
         {sliced_members.map((item,index)=>{
          return(
            <div key={index}>
            <img src={item.profile} className="w-[34px] h-[34px] rounded-full object-cover"/>
            </div>
          )
         })}
        </div>
    
        {/* The join button and thatone to follow*/}
        <div className="flex gap-2 md:pt-0 pt-2">
        <button onClick={()=>joinCommunity()} className='font-sans text-home font-semibold border-solid border-[1px] border-home rounded-md py-1 px-5 text-sm mt-1 outline-none'>join</button>
        <button onClick={()=>followCommunity()} className='font-sans text-home font-semibold border-solid border-[1px] border-home rounded-md py-1 px-5 text-sm mt-1 outline-none'>follow</button>
        </div>
    
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