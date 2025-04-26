import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import VideoPost from '../../components/VideoPost/VideoPost';

const WatchPage = () => {

  const posts = useSelector((state)=>state.posts.all_posts);

  return (
    <div>
    <Navbar/>

    <div className="w-full flex">
    <Sidebar/>

    <div className='w-full md:w-[50%] md:ml-[25%] flex flex-col items-center'>
   
    {/* The posts */}
    <div className='flex flex-col-reverse items-center w-full'>
    {posts.map((item,index)=>{
      if(item.post_type =='video'){
        return <VideoPost key={index} post_type={item.post_type} _id={item._id} views={item.views} owner={item.owner} likes={item.likes} comments={item.comments} text={item.text} post_value={item.post_value}/>
      }
    })}
    </div>

    </div>


    </div>

    </div>
  )
}

export default WatchPage