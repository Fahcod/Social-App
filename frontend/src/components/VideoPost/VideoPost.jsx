import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {BiDotsVerticalRounded,BiShare,BiComment,BiRepost,BiHeart, BiVolumeFull, BiPlayCircle, BiPauseCircle, BiVolumeMute} from "react-icons/bi"
import { SocialContext } from '../../context/SocialContext';

const VideoPost = (props) => {

    const [isLiked,setIsLiked] = useState(false);

    const {sendLike,sendView} = useContext(SocialContext);

    //The video player functionality

    const videoElem = useRef();

    const video = videoElem.current;

    //the playing checker
    const [playing,setPlaying] = useState(false);

    //the mute checker
    const [isMuted,setIsMuted] = useState(false);

   //play the video
   function playVideo(){
    video.play()
   }

   //pause the video
   function pauseVideo(){
    video.pause();
   }

   //Play icon controller
   function togglePlay(){
    if(playing){
        pauseVideo();
        setPlaying(false);
    }else{
        playVideo()
        setPlaying(true)
    }
   }

   function muteVideo(){
    video.muted=true
   }

   function unMuteVideo(){
    video.volume=false
   }

   //Play icon controller
   function toggleMute(){
    if(isMuted){
       unMuteVideo();
       setIsMuted(false)
    }else{
        muteVideo();
        setIsMuted(true)
    }
   }


  return (
    <div className='w-[100%] md:w-[90%]' onMouseOver={()=>sendView(props._id)}>

        {/* The div for profile information */}
        <div className="w-full flex justify-between px-3 pt-3">
        <div className="flex items-center gap-2">
        <Link to={`/user/${88}`}>
         <div>
            <img src={props.owner?props.owner.profile:""} className='w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full object-cover'/>
         </div>
         </Link>
         <div className="">
            <h2 className='font-sans font-bold text-md dark:text-white'>Twesigye Fahad</h2>
            <p className='text-sm text-[#454545] dark:text-[#808080] leading-none'>2d ago,{props.views?props.views.length:"0"} views</p>
         </div>
        </div>

        <div>
        <BiDotsVerticalRounded className='w-7 h-7 dark:text-white'/>
        </div>

        </div>
        {/* The end of the profile information */}

        <div className="w-full px-4 py-2">
        <p className="text-sm dark:text-white">{props.text}</p>
        </div>
      
        {/*The big video container*/}
        <div className="w-full relative px-4 overflow-hidden h-[300px] md:h-[400px]">

        <video src={props.post_value} autoPlay muted ref={videoElem} className="rounded-md overflow-hidden top-0 w-auto left-0 z-[-1] absolute h-full object-fill"></video>

        {/* The main video container */}
        <div className="w-full h-full rounded-md bg-[linear-gradient(rgba(23,23,24,0.49),transparent,rgba(23,23,24,0.49))]">

        {/* The top cont */}
        <div className="w-full flex justify-between py-2 px-3">
        {isMuted?<BiVolumeFull className='w-5 h-5 text-white' onClick={()=>toggleMute()}/>:<BiVolumeMute className='w-5 h-5 text-white' onClick={()=>toggleMute()}/>}
        <BiDotsVerticalRounded className='w-6 h-6 text-white'/>
        </div>

        {/* The player trigger */}
        <div className="w-full h-[80%] flex items-center justify-center">
        {playing?<BiPauseCircle className='w-10 h-10 text-white' onClick={()=>togglePlay()}/>:<BiPlayCircle className='w-10 h-10 text-white' onClick={()=>togglePlay()}/>}
        </div>
        
        </div>

        </div>

        {/* The post options */}
                 <div className="w-full flex items-center justify-between px-4 py-2">
        
                    <div className='flex items-center gap-1' onClick={()=>sendLike(props._id)}>
                        {isLiked?<FaHeart className='text-red-500 w-5  h-5 md:w-[21px] md:h-[21px]'/>:<BiHeart className='w-6 h-6 dark:text-[#808080]'/>}
                        <p className="text-xs text-[#454545]">{props.likes?props.likes.length:"0"}</p>
                    </div>
        
                    <div className='flex items-center gap-1'>
                        <BiComment className='w-5 h-5 md:w-6 md:h-6 dark:text-[#808080]'/>
                        <p className="text-xs text-[#454545] dark:text-[#808080]">{props.coments?props.comments.length:"0"}</p>
                    </div>
        
                    <div className='flex items-center gap-1'>
                        <BiRepost className='w-7 h-7 dark:text-[#808080]'/>
                    </div>
        
                    <div className='flex items-center gap-1'>
                        <BiShare className="w-6 h-6 dark:text-[#808080]"/>
                        <p className="text-xs text-[#454545] dark:text-[#808080]">282k</p>
                    </div>
                 
                 </div>
        
                 <hr className='mx-4 mt-2 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    </div>
  )
}

export default VideoPost