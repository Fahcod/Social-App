import React, { useContext, useState } from 'react'
import { FaX } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { showTextUpload } from '../../features/modelSlice';
import axios from "axios";
import { SocialContext } from '../../context/SocialContext';
import { toast } from 'react-toastify';
import { addPost } from '../../features/postsSlice';


const UploadText = () => {

    const shower = useSelector((state)=>state.models.show_text_upload);

    const dispatch = useDispatch();

    const [text,setText]=useState("");

    const {url} = useContext(SocialContext);

    axios.defaults.withCredentials=true;

    const sendData = async ()=>{
    
        let response = await axios.post(`${url}/api/posts/create-text`,{text:text});

        if(response.data.success){
            toast.success(response.data.message);
            dispatch(addPost(response.data.post));
            dispatch(showTextUpload(false));
        }else{
            toast.error(response.data.message);
        }
    }

  return (
    <div className={`w-full bg-[#2b323c] ${shower?`flex`:`hidden`} items-center justify-center h-screen fixed top-0 z-[200]`}>

        {/* The image upload form */}
        <div className="w-full md:w-[40%] h-full md:h-[unset] bg-white dark:bg-dark rounded-md">

            <div className="w-full flex justify-between items-center px-5 py-2">
                <h1 className='font-sans text-[18px] dark:text-white'>Create text post</h1>
                <FaX className='w-4 h-4 dark:text-white' onClick={()=>dispatch(showTextUpload(false))}/>
            </div>

            <div className="w-full px-5 mt-4">
                <textarea placeholder="Type your message here..." value={text} onChange={(e)=>setText(e.target.value)} name="text" className='h-[65vh] md:h-[190px] p-3 text-sm rounded-sm outline-none border-solid border-[1px] border-[#cacaca] dark:bg-transparent dark:text-[#888] dark:border-[#333] w-[100%]'></textarea>
            </div>

            <div className="w-full flex px-5 gap-6 pb-3 mt-2">

                <div className="hidden sm:flex gap[1px] cursor-pointer rounded-md items-center py-2 w-[65%] md:w-[50%] border-solid border-[1px] border-[#cacaca] dark:border-[#333]">
                 <div onClick={()=>setText([...text,"😍"].join(""))}>😍</div>
                 <div onClick={()=>setText([...text,"🤔"].join(""))}>🤔</div>
                 <div onClick={()=>setText([...text,"❤️"].join(""))}>❤️</div>
                 <div onClick={()=>setText([...text,"🤣"].join(""))}>🤣</div>
                 <div onClick={()=>setText([...text,"✨"].join(""))}>✨</div>
                 <div onClick={()=>setText([...text,"😡"].join(""))}>😡</div>
                 <div onClick={()=>setText([...text,"❤️"].join(""))}>❤️</div>
                 <div onClick={()=>setText([...text,"🤩"].join(""))}>🤩</div>
                 
                 <div>
                    <p className="text-blue-600 font-sans">+more</p>
                 </div>
                </div>

                <button className='rounded-md text-sm md:text-[16px]  py-2 w-[35%] md:w-[50%] text-blue-600 font-sans border-solid border-[1px] border-blue-600 font-semibold' onClick={()=>sendData()}>Upload post</button>
            </div>

        </div>

    </div>
  )
}

export default UploadText;