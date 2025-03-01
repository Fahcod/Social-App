import React, { useContext } from 'react';
import TextPost from '../../../components/TextPost/TextPost'
import ImagePost from '../../../components/IamgePost/ImagePost'
import { useSelector } from 'react-redux';
import { SocialContext } from '../../../context/SocialContext';

const Home = () => {

  const {getUserPosts}=useContext(SocialContext);

  const posts = useSelector((state)=>state.posts.all_posts);

  const user = useSelector((state)=>state.user);

  const myPosts = getUserPosts(posts,user);

  return (
    <div className='w-[100%] flex flex-col-reverse items-center pb-16 md:pb-11'>
   {myPosts.map((item,index)=>{
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

export default Home;