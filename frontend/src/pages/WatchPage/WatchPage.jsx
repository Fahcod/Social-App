import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const WatchPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="w-full flex">
    <Sidebar/>
    </div>
    </div>
  )
}

export default WatchPage