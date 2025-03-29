import React from 'react';
import {BiBell,BiGift,BiMenu, BiSearch, BiSolidGift, BiSquareRounded} from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { showNotify } from '../../features/modelSlice';
import {FaBell, FaHouse, FaMagnifyingGlass, FaUsers} from "react-icons/fa6"

const Navbar = () => {

  const userData = useSelector((state)=>state.user);

  const dispatch = useDispatch();

  return (
    <>
    <div className='w-[100%] dark:bg-dark h-[60px] bg-[#fff] sticky top-0 z-[150]'>

     <div className='w-[100%] h-full 2xl:w-[60%] 2xl:mx-auto flex items-center justify-between'>

      {/* The logo */}
      <div className='h-full flex items-center pl-3 sm:pl-6'>
        <h1 className="gap-2 flex items-center font-sans font-black text-2xl md:text-3xl text-home">Socialspot</h1>
      </div>


     
      {/* Navbar right */}
      <div className="h-full items-center pl-4 flex">

        <div className='hidden sm:flex items-center justify-between gap-5'>

          <div className='w-[39px] flex items-center justify-center h-[39px] bg-[#dedede] rounded-full'>
            <FaHouse className='w-5 h-5'/>
          </div>

          <div className='w-[39px] flex items-center justify-center h-[39px] bg-[#dedede] rounded-full'>
            <FaBell className='w-5 h-5'/>
          </div>

          <div className='w-[39px] flex items-center justify-center h-[39px] bg-[#dedede] rounded-full'>
            <FaUsers className='w-5 h-5'/>
          </div>

          <div className='w-[39px] flex items-center justify-center h-[39px] bg-[#dedede] rounded-full'>
            <FaMagnifyingGlass className='w-5 h-5'/>
          </div>

          <div className='w-[39px] flex items-center justify-center h-[39px] bg-[#dedede] rounded-full'>
            <BiSolidGift className='w-6 h-6'/>
          </div>

          <Link to="/me/all" className='md:block hidden'>
          <img src={userData?userData.profile:""} className='w-[39px] h-[39px] md:w-[40px] md:h-[40px] rounded-full object-cover'/>
          </Link>
       
        </div>

        {/* div for the profile */}
        <div className="flex items-center gap-5 md:gap-2 dark:text-white">

            <div>
            <BiSearch className='w-7 h-7 md:hidden'/>
            </div>

            <div>
            <BiBell className='w-7 h-7 md:hidden' onClick={()=>dispatch(showNotify(true))}/>
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