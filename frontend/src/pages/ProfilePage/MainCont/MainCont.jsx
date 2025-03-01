import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import CenterCont from '../CenterCont/CenterCont'
import RightBar from '../RightBar/RightBar'

const MainCont = () => {
  return (
    <div className='w-[100%] flex 2xl:w-[80%]'>
    <Sidebar/>
    <CenterCont/>
    <RightBar/>
    </div>
  )
}

export default MainCont