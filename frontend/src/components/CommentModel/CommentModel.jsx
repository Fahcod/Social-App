import React from 'react';
import { BiPaperPlane, BiX } from 'react-icons/bi';
import Comment from '../Comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { showComments } from '../../features/modelSlice';

const CommentModel = () => {

    const shower = useSelector((state)=>state.models.show_comments);

    const dispatch = useDispatch();

    const commentArray = useSelector((state)=>state.posts.post_comments);

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

                    {/* The top conatiner */}
                    <div className="w-full flex justify-between px-4">

                        <div className="flex gap-3">
                            <div>
                                <img src="" className="w-[38px] h-[38px] rounded-full object-cover"/>
                            </div>
                            <div>
                                <h2 className="dark:text-white font-sans text-md font-semibold">Twesigye Fahad</h2>
                                <p className="text-[#454545] text-sm leading-none dark:text-[#808080]">23k views 2d ago</p>
                            </div>
                        </div>
                     
                    </div>
                    {/* End of the top container */}

                    <div className='w-full px-4 pt-2'>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sunt commodi tenetur dolore rerum veritatis suscipit, voluptatem consequatur quisquam nemo cupiditate temporibus ipsam in magni natus sapiente placeat sint quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sunt commodi tenetur dolore rerum veritatis suscipit, voluptatem consequatur quisquam nemo cupiditate temporibus ipsam in magni natus sapiente placeat sint quasi.</p>
                    </div>

                    <div className="w-full px-4">
                    {/* The add comment */}
                    <div className="w-full flex gap-2 mx-4 h-[41px] bg-[#efefef]">
                    <input type="text" className="w-[95%] outline-none bg-transparent" placeholder='Add a comment'/>
                    <BiPaperPlane className='w-6 h-6'/>
                    </div>
                    </div>

                </div>
                
                </div>


                {/* The real comment container */}
                <div className="w-[100%] [&::-webkit-scrollbar]:w-0 pb-16  md:w-[50%] overflow-y-auto flex flex-col gap-4 h-full px-5 pt-4 border-solid border-l-[1px] border-gray-200 dark:border-[#333]">
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