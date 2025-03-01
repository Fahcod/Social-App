import React from 'react';
import TextPost from '../TextPost/TextPost';
import ImagePost from '../IamgePost/ImagePost';
import { useSelector } from 'react-redux';

const PostCont = () => {

  const posts = useSelector((state)=>state.posts.all_posts);

  return (
    <div className='w-[100%] flex flex-col-reverse items-center pb-16 md:pb-11'>
   {posts.map((item,index)=>{
    if(item.post_type === 'image'){
      return <ImagePost key={index} _id={item._id} views={item.views} comments={item.comments} likes={item.likes} owner={item.owner} text={item.text} post_value={item.post_value}/>
    }else{
      if(item.post_type === 'text'){
        return <TextPost key={index} _id={item._id} views={item.views} owner={item.owner} likes={item.likes} comments={item.comments} text={item.text}/>
      }
    }
   })}
    </div>
  );
}

export default PostCont;