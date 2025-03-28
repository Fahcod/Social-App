import React, { useContext,useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {BiDotsVerticalRounded,BiShare,BiComment,BiRepost,BiHeart, BiVolumeFull, BiPlayCircle, BiPauseCircle, BiVolumeMute} from "react-icons/bi"
import { SocialContext } from '../../context/SocialContext';
import { useDispatch } from 'react-redux';
import { showComments, showPostOptions} from '../../features/modelSlice';
import { setPostComments } from '../../features/postsSlice';
import { setCurrentPost } from '../../features/postsSlice';
import {FaHeart} from "react-icons/fa6"

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

    let progress = 20 + 40;

    inputElem.current.value=progress

    }

    //rewind the video
   function rewindVideo(){

    const duration = videoElem.current.duration;
    const progress = inputElem.current.value
    const currentTime = (progress/100) * duration
    videoElem.current.currentTime = currentTime

   }

  return (
    <div className='w-[100%] md:w-[90%] md:mt-6 mt-4' onMouseOver={()=>sendView(props._id)}>

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
      
        {/*The big video container*/}
        <div className="w-[100%] relative overflow-hidden h-[260px] md:h-[400px]">

        <video src={props.post_value} ref={videoElem} className="flex justify-center w-full h-full absolute z-[-1] object-cover rounded-md" onTimeUpdate={()=>moveSlider}></video>

        {/* The main video container */}
        <div className="w-full h-full rounded-md bg-[linear-gradient(rgba(23,23,24,0.49),transparent,rgba(23,23,24,0.49))]">
        
        {/* The top cont */}
        <div className="w-full flex justify-between py-2 px-3">
        {isMuted?<BiVolumeFull className='w-5 h-5 text-white' onClick={()=>toggleMute()}/>:<BiVolumeMute className='w-5 h-5 text-white' onClick={()=>toggleMute()}/>}
        <BiDotsVerticalRounded className='w-6 h-6 text-white'/>
        </div>

        {/* The player trigger */}
        <div className="w-full md:h-[80%] h-[70%] flex items-center justify-center">
        {playing?<BiPauseCircle className='w-10 h-10 text-white' onClick={()=>togglePlay()}/>:<BiPlayCircle className='w-10 h-10 text-white' onClick={()=>togglePlay()}/>}
        </div>

        <div className="w-full px-2">
            <input type="range" id="input" ref={inputElem} className='w-full' onInput={rewindVideo} maxLength="100" onChange={(e)=>setSilderValue(e.target.value)}/>
        </div>
        
        </div>

        </div>
        {/* End of the big video container */}


        {/* The post options */}
                 <div className="w-full flex items-center justify-between px-4 py-2">
        
                    <div className='flex items-center gap-1' onClick={()=>{
                        checkLike()
                        sendLike(props._id);
                    }}>
                        {isLiked?<FaHeart className='text-red-500 w-5  h-5 md:w-[21px] md:h-[21px]'/>:<BiHeart className='w-6 h-6 dark:text-[#808080]'/>}
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
                        <BiComment className='w-5 h-5 md:w-6 md:h-6 dark:text-[#808080]'/>
                        <p className="text-xs text-[#454545] dark:text-[#808080]">{props.comments?props.comments.length:"0"}</p>
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