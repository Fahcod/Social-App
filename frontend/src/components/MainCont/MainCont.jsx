import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import CenterCont from '../CenterCont/CenterCont';
import RightBar from '../RightBar/RightBar';

const MainCont = () => {
  return (
    <div className='flex w-[100%] 2xl:px-[20%]'>
    <Sidebar/>
    <CenterCont/>
    <RightBar/>
    </div>
  )
}

export default MainCont;