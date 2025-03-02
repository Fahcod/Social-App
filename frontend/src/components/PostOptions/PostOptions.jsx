import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showPostOptions } from '../../features/modelSlice';
import { SocialContext } from '../../context/SocialContext';

const PostOptions = () => {

    const shower = useSelector((state)=>state.models.show_post_options);
    const {deletePostId,deletePost} = useContext(SocialContext);

    const dispatch = useDispatch();

  return (
    <div className={`w-full ${shower?`flex`:`hidden`} h-screen justify-center fixed top-[0] z-[200] bg-[#2b323c] items-center`}>
    
    <div className="bg-white dark:text-white dark:bg-dark flex flex-col py-2 gap-3 w-[270px] rounded-md">

    <div className='px-6 cursor-pointer'>
    <p onClick={()=>deletePost(deletePostId)}>Delete post</p>
    </div>
    <hr className='mx-6 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    <div className='px-6 cursor-pointer'>
    <p>Save post</p>
    </div>
    <hr className='mx-6 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    <div className='px-6 cursor-pointer'>
    <p>Report user</p>
    </div>
    <hr className='mx-6 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    <div className='px-6 cursor-pointer'>
    <p>Block posts from this user</p>
    </div>
    <hr className='mx-6 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]'/>

    <div className='px-6 cursor-pointer'>
    <p onClick={()=>dispatch(showPostOptions(false))}>Close</p>
    </div>

    </div>

    </div>
  )
}

export default PostOptions;