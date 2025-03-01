import React from 'react'
import ProfileTop from '../ProfileTop/ProfileTop';
import { Outlet } from 'react-router-dom';
import ProfileNav from '../../../components/PhoneComponents/ProfileNav';


const CenterCont = () => {
  return (
    <div className='w-[100%] md:w-[50%] md:pt-3 md:ml-[25%] flex flex-col items-center'>
    <ProfileTop/>
    <div className="w-[100%]">
    <Outlet/>
    </div>
    <ProfileNav/>
    </div>
  )
}

export default CenterCont;