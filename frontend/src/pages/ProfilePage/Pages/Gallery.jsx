import React,{useContext} from 'react';
import { SocialContext } from '../../../context/SocialContext';
import { useSelector } from 'react-redux';

const Gallery = () => {

  const {getUserPosts}=useContext(SocialContext);

  const posts = useSelector((state)=>state.posts.all_posts);

  const user = useSelector((state)=>state.user);

  const myPosts = getUserPosts(posts,user);

  function findImagePosts(){
  
    const image_posts = myPosts.filter((item)=>{
        return item.post_type === "image"
    });

    return image_posts
  }

  const imagePosts = findImagePosts();

  return (
    <div className="w-[100%] flex flex-col items-center">
    <div className='w-[95%] md:w-[90%] grid md:grid-cols-4 grid-cols-3 gap-1 pt-3 pb-11'>
   {imagePosts.map((item,index)=>{
    return(
        <img src={item.post_value} key={index} className='w-full h-[170px] object-cover'/>
    )
   })}
    </div>
    </div>
  )
}

export default Gallery;