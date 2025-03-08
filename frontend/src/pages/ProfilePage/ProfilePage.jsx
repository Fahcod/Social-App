import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MainCont from './MainCont/MainCont';
import PostOptions from '../../components/PostOptions/PostOptions';
import { pageScroller } from '../../utils/scroller';

const ProfilePage = () => {

  useEffect(()=>{
    pageScroller()
  },[]);
  
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