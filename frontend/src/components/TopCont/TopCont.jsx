import React from 'react'
import { FaCamera, FaFaceSmile, FaImage, FaTextWidth, FaVideo } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { showImageUpload, showTextUpload } from '../../features/modelSlice';


const TopCont = () => {

  const userData = useSelector((state)=>state.user);

  const dispatch = useDispatch();

  return (
    <div className="w-[100%] md:w-[90%] bg-white rounded-sm dark:bg-dark">

     <div className="flex w-full gap-2 px-4 pt-3">
  
        <img src={userData?userData.profile:""} className="rounded-full object-cover w-[38px] h-[38px] md:w-[43px] md:h-[43px]"/>
     
     <div className="w-[90%] bg-[#efefef] dark:bg-[#333] rounded-3xl">
        <input type="text" placeholder="what's on your mind" className="dark:text-white outline-none w-[100%] h-full bg-transparent px-3"/>
     </div>
     </div>

     <hr className='mt-3 mx-4 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

     <div className="w-full flex justify-between px-4 items-center py-4">

     <div className="flex md:gap-2 items-center cursor-pointer md:flex-row flex-col gap-1">
        <FaVideo className='w-5 h-5 text-[#eb2435]'/>
        <p className='dark:text-white text-xs md:text-[16px]'>Video</p>
      </div>

      <div className="flex md:gap-2 items-center cursor-pointer md:flex-row flex-col gap-1" onClick={()=>dispatch(showImageUpload(true))}>
        <FaImage className='w-4 h-4 text-[#2deb2d]'/>
        <p className='dark:text-white text-xs md:text-[16px]'>Image</p>
      </div>

      <div className="flex md:gap-2 items-center cursor-pointer flex-col md:flex-row gap-1">
        <FaTextWidth className='w-5 h-5 text-blue-500' onClick={()=>dispatch(showTextUpload(true))}/>
        <p className='dark:text-white text-xs md:text-[16px]'>Text</p>
      </div>

      <div className="flex md:gap-2 items-center cursor-pointer md:flex-row flex-col gap-1">
        <FaFaceSmile className='w-4 h-4 text-[#f1ee32]'/>
        <p className='dark:text-white md:text-[16px] text-xs'>Feeling/activity</p>
      </div>
     
     </div>

    </div>
  )
}

export default TopCont;