import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { SocialContext } from '../../../context/SocialContext';
import { useParams } from 'react-router-dom';
import ImagePost from '../../../components/IamgePost/ImagePost';
import TextPost from '../../../components/TextPost/TextPost';


const Home = () => {

  const {getOtherPosts}=useContext(SocialContext);

  const {userId} = useParams();

  const posts = useSelector((state)=>state.posts.all_posts);

  const myPosts = getOtherPosts(posts,userId);

  return (
        <div className='w-[100%] flex flex-col-reverse items-center md:pb-11 pb-16'>
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
  )
}

export default Home;