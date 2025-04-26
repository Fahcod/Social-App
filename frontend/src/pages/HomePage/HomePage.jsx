import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainCont from '../../components/MainCont/MainCont';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import UploadText from '../../components/UploadText/UploadText';
import PostOptions from '../../components/PostOptions/PostOptions';
import NotificationModel from '../../components/NotificationModel/NotificationModel';
import CommentModel from '../../components/CommentModel/CommentModel';
import { pageScroller } from '../../utils/scroller';
import UploadVideo from '../../components/UploadVideo/UploadVideo';
import ImageViewer from '../../components/ImageViewer/ImageViewer';


const HomePage = () => {

  useEffect(()=>{
  pageScroller();
  },[]);

  return (
    <div>
    <UploadPhoto/> 
    <UploadText/>
    <PostOptions/>
    <NotificationModel/>
    <CommentModel/>
    <UploadVideo/>
    <ImageViewer/>

    <Navbar/>
    <MainCont/>
    </div>
  )
}

export default HomePage;