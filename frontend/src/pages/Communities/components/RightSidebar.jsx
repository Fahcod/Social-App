import React from 'react';
import { useDispatch } from 'react-redux';
import { showCreateCommunity } from '../../../features/modelSlice';

const RightSidebar = () => {

  const dispatch = useDispatch()

  return (
    <div className='md:w-[25%] overflow-hidden w-0 h-screen border-solid border-l-[1px] border-gray-200 fixed right-0'>

   <div className="w-full">

   </div>

   {/* The community creation div */}
   <div className='w-full px-4 pt-2'>

    <button className='w-full bg-home text-white outline-none py-2 rounded-3xl' onClick={()=>dispatch(showCreateCommunity(true))}>Create a community</button>

   </div>

    </div>
  )
}

export default RightSidebar;