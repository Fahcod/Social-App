import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CenterCont from './CenterCont/CenterCont';
import Rightbar from './Rightbar/Rightbar';
import Sidebar from './Sidebar/Sidebar';

const ChatPage = () => {
  return (
    <>
    <div className='w-full flex'>
    <Sidebar/>
    <CenterCont/>
    </div>
    </>
  )
}

export default ChatPage;