import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MainCont from './MainCont/MainCont';
import PostOptions from '../../components/PostOptions/PostOptions';
import { pageScroller } from '../../utils/scroller';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const ProfilePage = () => {

  useEffect(()=>{
    pageScroller()
  },[]);
  
  return (
    <>
    <ImageViewer/>
    <PostOptions/>
    <div className=''>
    <Navbar/>
    <MainCont/>
    </div>
    </>
  )
}

export default ProfilePage;