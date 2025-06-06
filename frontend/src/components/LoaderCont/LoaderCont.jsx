import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { SocialContext } from '../../context/SocialContext';
import { FaS } from 'react-icons/fa6';

const LoaderCont = () => {

    const navigate = useNavigate();
    const {url} = useContext(SocialContext);

    axios.defaults.withCredentials=true;

    const fetchUser = async ()=>{

        let response = await axios.get(`${url}/api/user/get-user`);

        if(response.data.success){
            navigate("/home")
        }else{
            navigate("/login")
        }
    }

   useEffect(()=>{
   fetchUser();
   },[]);

  return (
    <div className='bg-white flex justify-center items-center w-full h-screen dark:bg-dark'>
    
    <div className=''>
        
    <div className="bg-home p-4 rounded-full">
        <FaS className='text-white w-11 h-11'/>
    </div>
    {/* The end of the icon */}
    </div>

    <div className='fixed bottom-11 flex items-center flex-col gap-1'>
        <h1 className="font-rubik-bold text-xl dark:text-white">Socialspot</h1>
        <p className="text-[#333] leading-none text-sm">By codewizard415</p>
    </div>

    </div>
  )
}

export default LoaderCont;