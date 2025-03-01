import React from 'react';
import {BiBell,BiMenu, BiSearch} from "react-icons/bi"
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const Navbar = () => {

  const userData = useSelector((state)=>state.user);

  return (
    <>
    <div className='w-[100%] dark:bg-dark h-[60px] bg-[#fff] sticky top-0 z-[100]'>
     <div className='w-[100%] h-full 2xl:w-[60%] 2xl:mx-auto flex items-center justify-between'>

      {/* The logo */}
      <div className='sm:w-[25%] h-full flex items-center pl-3 sm:pl-6'>
        <h1 className="gap-2 flex items-center font-sans font-black text-2xl md:text-3xl text-home">Socialspot</h1>
      </div>
     
     <div className="sm:w-[50%] h-full sm:flex hidden items-center">
     <div className="flex dark:bg-[#444] dark:text-[#d6d6d6] items-center gap-2 w-[100%] bg-[#efefef] h-[41px] px-3 rounded-full">
      <input type="text" placeholder='search account,post...' className='w-[95%] bg-transparent outline-none'/>
      <BiSearch className='w-5 h-5'/>
     </div>
     </div>

      {/* Navbar right */}
      <div className="sm:w-[25%] h-full pr-2 sm:pr-3 items-center pl-4 flex justify-between">

        <div>
       
        </div>

        {/* div for the profile */}
        <div className="flex items-center gap-5 md:gap-2 dark:text-white">
            
            <Link to="/me/all" className='md:block hidden'>
            <img src={userData?userData.profile:""} className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full object-cover'/>
            </Link>

            <div>
            <BiSearch className='w-7 h-7 md:hidden'/>
            </div>

            <div>
            <BiBell className='w-7 h-7 md:hidden'/>
            </div>

            <BiMenu className='w-8 h-8 block md:hidden dark:text-white'/>

        </div>
      
      </div>

    </div>
    <hr className='dark:outline-none dark:border-none dark:bg-[#333] dark:h-[1px]'/>
    </div>
    </>
  )
}

export default Navbar;