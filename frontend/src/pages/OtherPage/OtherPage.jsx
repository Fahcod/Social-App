import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useParams } from 'react-router-dom';
import TopProfile from './TopProfile/TopProfile';
import { useSelector } from 'react-redux';
import BottomNav from '../../components/PhoneComponents/BottomNav';
import PostOptions from '../../components/PostOptions/PostOptions';

const OtherPage = () => {

    const {userId} = useParams();
    const allUsers = useSelector((state)=>state.users.all_users);
    const currentUser = allUsers.find(e=>e._id === userId);

  return (
    <>
    <PostOptions/>
    <Navbar/>
    <div className='w-full flex justify-center'>

    {/* The center main-cont */}
    <div className="w-full md:w-[50%] flex flex-col items-center">
    <TopProfile user={currentUser}/>
    <Outlet/>
    <BottomNav/>
    </div>
   

    </div>
    </>
  )
}

export default OtherPage;