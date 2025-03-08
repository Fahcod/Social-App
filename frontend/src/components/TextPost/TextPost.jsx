import React, { useContext, useState,useEffect } from 'react'
import { BiComment, BiDotsVerticalRounded, BiHeart, BiRepost, BiShare } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { SocialContext } from '../../context/SocialContext';
import { showComments, showPostOptions } from '../../features/modelSlice';
import { Link } from 'react-router-dom';
import { setCurrentPost, setPostComments } from '../../features/postsSlice';

const TextPost = (props) => {

  const userData = useSelector((state)=>state.user);
  const {sendLike,setDeletePostId,sendView}=useContext(SocialContext);

  const dispatch = useDispatch();

  //check if post is liked by the user
   const [isLiked,setIsLiked] = useState(false);
  
   useEffect(()=>{
   let result = props.likes.find(e=>e===userData._id);
   if(result){
    setIsLiked(true);
   }
   },[]);

  return (
    <div className='w-[100%] md:w-[90%] bg-white dark:bg-dark rounded-sm mt-3 md:mt-6' onMouseOver={()=>{sendView(props._id)}}>

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
            <p className='text-sm text-[#454545] dark:text-[#808080] leading-none'>2d ago,{props.views.length} views</p>
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
        <p className="text-sm dark:text-white">{props.text}</p>
         </div>
         {/* <hr className='mx-4'/> */}
         {/* this is the container for the post options */}
         <div className="w-full flex items-center justify-between px-4 py-2">

            <div className='flex items-center gap-1' onClick={()=>sendLike(props._id)}>
                {isLiked?<FaHeart className='text-red-500 w-5  h-5 md:w-[21px] md:h-[21px]'/>:<BiHeart className='w-6 h-6 dark:text-[#808080]'/>}
                <p className="text-xs text-[#454545]">{props.likes.length}</p>
            </div>

            <div className='flex items-center gap-1' onClick={()=>{
              dispatch(showComments(true));
              dispatch(setPostComments(props.comments));
              dispatch(setCurrentPost({
                owner:props.owner,
                post_type:props.post_type
              }))
              }}>
                <BiComment className='w-5 h-5 md:w-6 md:h-6 dark:text-[#808080]'/>
                <p className="text-xs text-[#454545] dark:text-[#808080]">{props.comments?props.comments.length:""}</p>
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

export default TextPost;