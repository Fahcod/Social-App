import React, { useState } from 'react'
import CommItem from './CommItem';
import { useSelector } from 'react-redux';

const CenterCont = () => {

  const communities = useSelector((state)=>state.channels.all_channels);

  return (
    <div className='pt-4 w-[100%] gap-7 md:w-[50%] md:ml-[25%] flex items-center flex-col'>
   {communities.map((item,index)=>{
    return <CommItem key={index} followers={item.followers} name={item.name} privacy={item.privacy} profile={item.profile}/>
   })}
    </div>
  )
}

export default CenterCont;