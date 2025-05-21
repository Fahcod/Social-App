import React, { useContext,useEffect,useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { SocialContext } from '../../context/SocialContext';
import { showComments, showImageViewer, showPostOptions } from '../../features/modelSlice';
import { Link } from 'react-router-dom';
import { setCurrentPost, setPostComments } from '../../features/postsSlice';
import {BsHeart,BsRepeat, BsShare} from "react-icons/bs";
import {GoComment} from "react-icons/go";
import { setCurrentPostImage } from '../../features/postsSlice';

const ImagePost = (props) => {

 const userData = useSelector((state)=>state.user);
 const {sendLike,setDeletePostId,sendView} = useContext(SocialContext);

 const dispatch = useDispatch();
 //check if post is liked by the user
 const [isLiked,setIsLiked] = useState(false);

 dispatch(setCurrentPost)

 useEffect(()=>{
 let result = props.likes.find(e=>e===userData._id);
 if(result){
  setIsLiked(true);
 }
 },[]);

 function checkLike(){
  if(props.likes.includes(props._id)){
   setIsLiked(false);
  }else{
   setIsLiked(true)
  }
  }

  // the function to open the image viewer
  function openImageViewer(image_url){
  dispatch(setCurrentPostImage(image_url));
  dispatch(showImageViewer(true))
  }

  return (
    <div className='w-[100%] md:w-[90%] bg-white rounded-sm mt-3 md:mt-6 dark:bg-dark' onMouseOver={()=>{sendView(props._id)}}>

        {/* The div for profile information */}
        <div className="w-full flex justify-between px-3 pt-3">
        <div className="flex items-center gap-2">
        <Link to={`/user/${props.owner._id}`}>
         <div>
            <img src={props.owner?props.owner.profile:""} className='w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full object-cover'/>
         </div>
         </Link>
         <div className="">
            <h2 className='font-rubik-bold dark:text-white text-md'>{props.owner?props.owner.username:""}</h2>
            <p className='text-sm text-[#454545] leading-none dark:text-[#777]'>2d ago,{props.views.length} views</p>
         </div>
        </div>
        <div>
        <BiDotsVerticalRounded className='w-7 h-7 dark:text-white' onClick={()=>{
          dispatch(showPostOptions(true));
          setDeletePostId(props._id);
          }}/>
        </div>

        </div>
        {/* <hr className='mt-3 mx-4'/> */}
        {/* End of the profile information */}
         <div className="w-full px-4 py-2">
        <p className="text-sm font-rubik dark:text-[#fff]">{props.text}</p>
         </div>
         {/* <hr className='mx-4'/> */}


         {/* This is the container for the image */}
         <div className="w-full flex justify-center px-2 md:px-4">
         <img src={props.post_value} className="w-[100%] max-h-[285px] md:max-h-[330px] object-cover rounded-md" onClick={()=>openImageViewer(props.post_value)}/>
         </div>

         {/* this is the container for the post options */}
         <div className="w-full flex items-center justify-between px-4 pb-2 pt-3">

            <div className='flex items-center gap-1' onClick={()=>{
              checkLike();
              sendLike(props._id);
              }}>
                {isLiked?<FaHeart className='text-red-500 w-[21px] h-[21px]'/>:<BsHeart className='w-5 h-5 dark:text-[#808080]'/>}
                <p className="text-xs text-[#454545] dark:text-[#808080]">{props.likes.length}</p>
            </div>

            <div className='flex items-center gap-1' onClick={()=>{
              dispatch(showComments(true));
              dispatch(setPostComments(props.comments));
              dispatch(setCurrentPost({
                owner:props.owner,
                post_type:props.post_type,
                _id:props._id
              }))
            }}>
                <GoComment className='w-[22px] h-[22px] dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">{props.comments?props.comments.length:""}</p>
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

export default ImagePost;