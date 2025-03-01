import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainCont from '../../components/MainCont/MainCont';
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';
import UploadText from '../../components/UploadText/UploadText';
import PostOptions from '../../components/PostOptions/PostOptions';


const HomePage = () => {
  return (
    <div>
    <UploadPhoto/> 
    <UploadText/>
    <PostOptions/>

    <Navbar/>
    <MainCont/>
    </div>
  )
}

export default HomePage;