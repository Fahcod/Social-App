import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from "../../components/Sidebar/Sidebar"
import CenterCont from './components/CenterCont';
import RightSidebar from './components/RightSidebar';
import CreateCommunity from './components/CreateCommunity';

const Communities = () => {
  return (
    <div>
    <CreateCommunity/>
    <Navbar/>
    <div className="w-full flex">
    <Sidebar/>
    <CenterCont/>
    <RightSidebar/>
    </div>

    </div>
  )
}

export default Communities;