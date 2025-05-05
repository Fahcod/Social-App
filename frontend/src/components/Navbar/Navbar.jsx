import React from 'react';
import {BiBell,BiMenu, BiSearch} from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { showNotify } from '../../features/modelSlice';

const Navbar = () => {

  const userData = useSelector((state)=>state.user);

  const dispatch = useDispatch();

  return (
    <>
    <div className='w-[100%] dark:bg-dark h-[60px] bg-[#fff] sticky top-0 z-[150]'>

     <div className='w-[100%] h-full 2xl:w-[60%] 2xl:mx-auto flex items-center justify-between'>

      {/* The logo */}
      <div className='h-full md:w-[25%] flex items-center pl-3 sm:pl-6'>
        <h1 className="gap-2 flex items-center font-sans font-black text-2xl md:text-3xl text-home dark:text-white">Socialspot</h1>
      </div>

    {/*The nav center */}
    <div className="md:w-[50%] h-full md:flex justify-center items-center hidden">

      <div className="w-[90%] flex items-center gap-3 bg-[#efefef] dark:bg-[#999] rounded-3xl h-[42px]">
      <input type="text" className='bg-transparent outline-none w-[93%] pl-3' placeholder='search here...'/>
      <BiSearch className='text-[#454545] w-5 h-5'/>
      </div>
    
    </div>
     
      {/* Navbar right */}
      <div className="h-full items-center pl-4 flex md:w-[25%] justify-between pr-3 md:pr-6">
      
        {/* div for the mobile icons */}
        <div className="flex items-center gap-5 md:gap-2 dark:text-white">

            <div>
            <BiSearch className='w-7 h-7 md:hidden'/>
            </div>

            <div>
            <BiBell className='w-7 h-7 md:hidden' onClick={()=>dispatch(showNotify(true))}/>
            </div>

            <BiMenu className='w-8 h-8 block md:hidden dark:text-white'/>

        </div>
        
        <Link to="/me/all">
        <div className='md:block hidden'>
          <img src={userData?userData.profile:""} className="w-[40px] h-[40px] rounded-full object-cover"/>
        </div>
        </Link>
      
      </div>

    </div>

    <hr className='dark:outline-none dark:border-none dark:bg-[#333] dark:h-[1px]'/>

    </div>
    </>
  )
}

export default Navbar;