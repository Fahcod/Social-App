import React, { useContext, useState } from 'react';
import { BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { showVideoUpload } from '../../features/modelSlice';
import axios from "axios"
import { SocialContext } from '../../context/SocialContext';
import { toast } from 'react-toastify';

const UploadVideo = (props) => {

  const shower = useSelector((state)=>state.models.show_video_upload);

  const dispatch = useDispatch();

  const {url} = useContext(SocialContext);

  const [text,setText] = useState("");

  const [video,setVideo] = useState("");

  //send the video
  const sendData = async (event) =>{

    event.preventDefault();

    let formData = new FormData();
    formData.append("text",text);
    formData.append("video",video)

    let response = await axios.post(`${url}/api/posts/create-video`,formData);

    if(response.data.success){
        dispatch(addPost(response.data.post));
        dispatch(showVideoUpload(false))
    }else{
        toast.error(response.data.message);
        dispatch(showVideoUpload(false))
    }
}

  return (
    <div className={`w-full h-screen fixed top-0 z-[200] bg-[#0202028c] ${shower?`flex`:`hidden`} justify-center items-center`}>

   {/* The actual video upload container */}
    <form method='post' onSubmit={sendData} className="w-[45%] bg-white rounded-md pb-3">

    {/* The top header */}
    <div className="w-full h-[60px] flex justify-between py-3 px-5">
     <h2 className="font-sans text-md font-semibold">Create video post</h2>
     <BiX className='w-7 h-7' onClick={()=>dispatch(showVideoUpload(false))}/>
    </div>

    {/* The video item */}
    <div className="w-full px-5">
    <video src={props.post_value} muted autoPlay className="w-full h-[300px] overflow-hidden object-cover"></video>
    </div>

    <input type="file" name="vid_file" id="vid_file" onChange={(e)=>setVideo(e.target.files[0])}/>

    {/* The description input */}
    <div className="w-full px-4 pt-3">
    <textarea name="text" value={text} onChange={(e)=>setText(e.target.value)} className='w-full border-solid text-md p-2 border-[1px] border-gray-200 outline-none' placeholder='type your description here (optional)'></textarea>
    </div>

    {/* The upload cont */}
    <div className="w-full px-5 pt-2">
        <button type="submit" className='text-home border-solid border-[1px] border-home font-sans font-semibold px-6 py-1 rounded-md'>Upload video</button>
    </div>

    </form>

    </div>
  )
}

export default UploadVideo;