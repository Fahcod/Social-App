import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CenterCont from './CenterCont/CenterCont';
import Sidebar from "../../components/Sidebar/Sidebar"


const ChatPage = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full flex'>
    <Sidebar/>
    <CenterCont/>
    </div>
    </>
  )
}

export default ChatPage;