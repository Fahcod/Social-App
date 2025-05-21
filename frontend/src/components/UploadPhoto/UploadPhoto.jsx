import React, { useContext, useState } from 'react'
import { FaX } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { showImageUpload } from '../../features/modelSlice';
import axios from "axios";
import { SocialContext } from '../../context/SocialContext';
import { toast } from 'react-toastify';
import { addPost } from '../../features/postsSlice';
import {assets} from "../../assets/assets"

const UploadPhoto = () => {

    const {url} = useContext(SocialContext);

    const [image,setImage] = useState("");
    const [text,setText] = useState("");

    const shower = useSelector((state)=>state.models.show_image_upload);
    const dispatch = useDispatch();

    axios.defaults.withCredentials=true;

    const sendData = async ()=>{

        let formData = new FormData();
        formData.append("text",text);
        formData.append("image",image)
    
        let response = await axios.post(`${url}/api/posts/create-img`,formData);

        if(response.data.success){
            dispatch(addPost(response.data.post))
            dispatch(showImageUpload(false))
        }else{
            toast.error(response.data.message);
            dispatch(showImageUpload(false))
        }
    }

  return (
    <div className={`${shower?`flex`:`hidden`} w-full bg-[#020202bd] items-center justify-center h-screen fixed top-0 z-[200]`}>

        {/* The image upload form */}
        <div className="w-[100%] h-full md:h-[unset] md:w-[40%] bg-white dark:bg-dark rounded-md">

            <div className="w-full flex justify-between items-center px-5 py-3">
                <h1 className='font-sans text-[18px] dark:text-white'>Create image post</h1>
                <FaX className='w-4 h-4 dark:text-white' onClick={()=>dispatch(showImageUpload(false))}/>
            </div>

            <div className="w-full px-5">
                <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):assets.upload_area_img} className="object-cover rounded-sm w-[100%] h-[270px]"/>
                </label>
            </div>

            <input type="file" name="image" id="image" onChange={(e)=>setImage(e.target.files[0])} hidden/>

            <div className="w-full px-5 mt-4">
                <textarea placeholder="Type your message here (optional)" value={text} onChange={(e)=>setText(e.target.value)} name="text" className='p-2 dark:bg-transparent dark:text-[#808080] text-sm rounded-sm outline-none border-solid border-[1px] border-[#cacaca] dark:border-[#333] w-[100%] md:h-auto h-[25vh]'></textarea>
            </div>

            <div className="w-full flex px-5 gap-6 pb-3 mt-3">

            <div className="w-[65%] hidden sm:flex gap[1px] cursor-pointer rounded-md items-center py-2 md:w-[50%] border-solid border-[1px] border-[#cacaca] dark:border-[#333]">
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
               
                <button className='rounded-md py-2 w-[35%] md:w-[50%] text-blue-600 font-sans border-solid border-[1px] text-sm md:text-[16px] border-blue-600 font-semibold' onClick={()=>sendData()}>Upload your post</button>
            </div>

        </div>

    </div>
  )
}

export default UploadPhoto;