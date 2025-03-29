import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CenterCont from './CenterCont/CenterCont';
import SideFriends from './Sidebar/Sidebar';



const ChatPage = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full flex'>
    <SideFriends/>
    <CenterCont/>
    </div>
    </>
  )
}

export default ChatPage;