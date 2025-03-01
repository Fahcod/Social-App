import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MainCont from './MainCont/MainCont';
import PostOptions from '../../components/PostOptions/PostOptions';

const ProfilePage = () => {
  
  return (
    <>
    <PostOptions/>
    <div className=''>
    <Navbar/>
    <MainCont/>
    </div>
    </>
  )
}

export default ProfilePage;