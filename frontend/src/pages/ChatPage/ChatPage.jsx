import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CenterCont from './CenterCont/CenterCont';
import Rightbar from './Rightbar/Rightbar';
import Sidebar from './Sidebar/Sidebar';

const ChatPage = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full flex'>
    <Sidebar/>
    <CenterCont/>
    <Rightbar/>
    </div>
    </>
  )
}

export default ChatPage;