import React from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import CenterCont from './components/CenterCont';
import BottomNav from "../../components/PhoneComponents/BottomNav"

const CommunityPage = () => {

    const {communityId} = useParams();

    const communities = useSelector((state)=>state.channels.all_channels);

    // find the specific channel
    const currentCommunity = communities.find(e=>e._id===communityId);


  return (
    <>
    <Navbar/>

    <div className='flex'>
    <Sidebar/>
    <CenterCont communityData={currentCommunity}/>
    </div>
    <BottomNav/>
    </>
  )
}

export default CommunityPage;