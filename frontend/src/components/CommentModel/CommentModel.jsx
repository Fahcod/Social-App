import React, { useContext, useState } from 'react';
import {BiX } from 'react-icons/bi';
import Comment from '../Comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { showComments } from '../../features/modelSlice';
import {FaRegPaperPlane} from "react-icons/fa6"
import { SocialContext } from '../../context/SocialContext';

const CommentModel = () => {

    const shower = useSelector((state)=>state.models.show_comments);

    const dispatch = useDispatch();

    const commentArray = useSelector((state)=>state.posts.post_comments);

    const [text,setText] = useState("");

    const {addComment} = useContext(SocialContext);

    const currentPost = useSelector((state)=>state.posts.current_post);

    console.log(currentPost._id);

    return (
        <>
        <div className={`w-full h-screen fixed z-[200] bg-[#0202028c] ${shower?`flex`:`hidden`} items-center justify-center`}>

            <div className="w-[100%] md:w-[80%] h-full md:h-[95vh] bg-white  dark:bg-dark overflow-hidden">

                <div className="w-full flex items-center border-solid border-b-[1px] border-gray-200 dark:border-[#333] px-3 justify-between h-[60px]">
                    <h2 className="dark:text-white fon-sans font-semibold text-lg">Comments</h2>
                    <BiX className='w-6 h-6 dark:text-white' onClick={()=>dispatch(showComments(false))}/>
                </div>
                {/* end of the top bar */}

                {/* The mother container */}
                <div className="w-full flex h-full">

                {/* The post details container */}
                <div className="w-0 overflow-hidden md:w-[50%] h-full">

                {/* The actual post */}
                <div className="w-full pt-2">

                </div>
                
                </div>

                {/* The real comment container */}
                <div className="w-[100%] h-[100%] px-2 pb-16 [&::-webkit-scrollbar]:w-0 md:w-[50%] overflow-y-auto pt-4 border-solid border-l-[1px] border-gray-200 dark:border-[#333]">
            
                 {/* The add comment div */}
               <div className="w-full  h-[60px] border-solid border-b-[1px] border-gray-200 dark:border-[#333]">
               <div className="pr-3 md:pr-[unset] w-[100%] bg-[#efefef] dark:dark:bg-[#333] rounded-3xl h-[41px] flex items-center">
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="bg-transparent w-[93%] px-4 outline-none dark:text-white" placeholder='Add a comment...'/>
                <FaRegPaperPlane className='w-5 h-5 text-[#454545] dark:text-[#808080]' onClick={()=>{
                    addComment(currentPost._id,text);
                    setText("")
                }}/>
               </div>
               </div>

               {commentArray.map((item,index)=>{
                return <Comment key={index} comment={item.comment} author={item.author}/>
               })}

                </div>

                </div>

            </div>


        </div>
        </>
    )
}

export default CommentModel;