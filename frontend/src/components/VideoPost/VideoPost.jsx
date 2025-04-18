import React, { useContext,useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {BiDotsVerticalRounded,BiVolumeFull, BiPlayCircle, BiPauseCircle, BiVolumeMute, BiFullscreen} from "react-icons/bi"
import { SocialContext } from '../../context/SocialContext';
import { useDispatch } from 'react-redux';
import { showComments, showPostOptions} from '../../features/modelSlice';
import { setPostComments } from '../../features/postsSlice';
import { setCurrentPost } from '../../features/postsSlice';
import {FaHeart} from "react-icons/fa6";
import {BsHeart,BsRepeat, BsShare} from "react-icons/bs";
import {GoComment} from "react-icons/go";


const VideoPost = (props) => {

    const [isLiked,setIsLiked] = useState(false);

    const {sendLike,sendView,setDeletePostId} = useContext(SocialContext);

    const dispatch = useDispatch();

    //The video player functionality

    const videoElem = useRef(null);

    const inputElem = useRef(null);

    //the playing checker
    const [playing,setPlaying] = useState(false);

    //the mute checker
    const [isMuted,setIsMuted] = useState(false);

    //the slider value
    const [sliderValue,setSilderValue] = useState(0);

   //play the video
   function playVideo(){
    videoElem.current.play()
   }

   //pause the video
   function pauseVideo(){
    videoElem.current.pause();
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
    videoElem.current.muted=true
   }

   function unMuteVideo(){
    videoElem.current.muted=false
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

   function checkLike(){
    if(props.likes.includes(props._id)){
     setIsLiked(false);
    }else{
     setIsLiked(true)
    }
    }

    //function to move the slider
    function moveSlider(){

    const duration = videoElem.current.duration;
    const currentTime = videoElem.current.currentTime;

    let progress = (currentTime/duration)

    inputElem.current.value=progress

    }

    //rewind the video
   function rewindVideo(){
    const duration = videoElem.current.duration;
    const progress = inputElem.current.value
    const currentTime = (progress/100) * duration
    videoElem.current.currentTime = currentTime
   }

   //toggle fullscreen
   function toggleFullScreen(){
    videoElem.current.requestFullScreen()
   }

  return (
    <div className='w-[100%] md:w-[90%] md:mt-6 mt-4' onMouseOver={()=>sendView(props._id)}>

        {/* The div for profile information */}
        <div className="w-full flex justify-between px-3 pt-3">
        <div className="flex items-center gap-2">
        <Link to={`/user/${props.owner._id}`}>
         <div>
            <img src={props.owner?props.owner.profile:""} className='w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full object-cover'/>
         </div>
         </Link>
         <div className="">
            <h2 className='font-sans font-bold text-md dark:text-white'>{props.owner?props.owner.username:""}</h2>
            <p className='text-sm text-[#454545] dark:text-[#808080] leading-none'>2d ago,{props.views?props.views.length:"0"} views</p>
         </div>
        </div>

        <div onClick={()=>{
            dispatch(showPostOptions(true));
            setDeletePostId(props._id)
        }}>
        <BiDotsVerticalRounded className='w-7 h-7 dark:text-white'/>
        </div>

        </div>
        {/* The end of the profile information */}

        <div className="w-full px-4 py-2">
        <p className="text-sm dark:text-white">{props.text}</p>
        </div>

       {/* The big video container mother div--- */}
       <div className="w-full px-4">

        {/*The big video container*/}
        <div className="relative w-[100%] flex justify-center bg-black rounded-md" id="conts">

        {/* the controls container */}
        <div className="absolute top-0 left-0 bottom-0 rounded-md bg-[#1b1b1b4d] z-[100] w-full h-full">
        
        {/* The first play=pause container */}
        <div className="w-full h-[100%] sm:h-[83%] flex items-center justify-center" onClick={()=>togglePlay()}>
         {playing?<BiPauseCircle className='text-white w-9 h-9'/>:<BiPlayCircle className='text-white w-9 h-9'/>}
        </div>
        
        {/* The last controls container */}
        <div className="w-full px-1 h-[20%] hidden sm:block sm:h-[17%]">

        <div className="w-full">
        <input type="range" value={99.0} className="w-full" id="input" ref={inputElem} onInput={rewindVideo}/>
        </div>

        {/* The last part */}
        <div className="w-full flex items-center px-1 sm:pt-1 pt-1 justify-between">

            {/* div left */}
            <div className="flex items-center gap-3">
                <p className='text-white text-sm'>2:34:01 / 3:45:01</p>

                {/* The volume control */}
                <div className='flex items-center gap-3' onClick={()=>toggleMute()}>
                {isMuted?<BiVolumeMute className='text-white w-5 h-5'/>:<BiVolumeFull className='text-white w-5 h-5'/>}
                </div>

            </div>

            {/* div right */}
            <div className="">
            <BiFullscreen className='text-white w-5 h-5' onClick={()=>toggleFullScreen()}/>
            </div>
              
        </div>
        
        </div>

        </div>
        {/* end of the video controls */}


        {/* The video is below there */}
        <video src={props.post_value} ref={videoElem} onTimeUpdate={()=>moveSlider()} className="w-[100%] max-h-[400px] rounded-md"></video>

        </div>

        </div>
        {/* End of the big video container */}

        {/* The post options */}
                 <div className="w-full flex items-center justify-between px-4 py-2">
        
                    <div className='flex items-center gap-1' onClick={()=>{
                        checkLike()
                        sendLike(props._id);
                    }}>
                        {isLiked?<FaHeart className='text-red-500 w-5  h-5 md:w-[21px] md:h-[21px]'/>:<BsHeart className='w-5 h-5 dark:text-[#808080]'/>}
                        <p className="text-xs text-[#454545]">{props.likes?props.likes.length:"0"}</p>
                    </div>
        
                    <div className='flex items-center gap-1' onClick={()=>{

                        dispatch(showComments(true));
                        dispatch(setPostComments(props.comments));
                        dispatch(setCurrentPost({
                        owner:props.owner,
                        post_type:props.post_type,
                        _id:props._id
                      }));

                    }}>
                        <GoComment className='w-[22px] h-[22px] dark:text-[#808080]'/>
                        <p className="text-xs text-[#454545] dark:text-[#808080]">{props.comments?props.comments.length:"0"}</p>
                    </div>
        
                    <div className='flex items-center gap-1'>
                        <BsRepeat className='w-5 h-5 dark:text-[#808080]'/>
                    </div>
        
                    <div className='flex items-center gap-2'>
                       <BsShare className="w-[18px] h-[18px] dark:text-[#808080]"/>
                       <p className="text-xs text-[#454545] dark:text-[#808080]">282k</p>
                    </div>
                 
                 </div>
        
                 <hr className='mx-4 mt-2 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    </div>
  )
}

export default VideoPost