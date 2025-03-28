import React, { useContext, useState } from 'react';
import {BiX} from "react-icons/bi";
import {useFormik} from "formik";
import { communitySchema } from '../../../schemas/schemas';
import axios from "axios";
import {SocialContext} from "../../../context/SocialContext";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showCreateCommunity } from '../../../features/modelSlice';

const CreateCommunity = () => {

  const [image,setImage] = useState("");

  const {url} = useContext(SocialContext)

  axios.defaults.withCredentials=true;

  const dispatch = useDispatch();

  const shower = useSelector((state)=>state.models.show_create_community);

  const onSubmit = async (values,actions)=>{

    let formData = new FormData();
    formData.append("name",values.name);
    formData.append("privacy",values.privacy);
    formData.append("description",values.description)
    formData.append("image",image)

    let response = await axios.post(`${url}/api/community/create`,formData);

    if(response.data.success){
        toast.success(response.data.message);
        actions.resetForm();
        dispatch(showCreateCommunity(false))
    }else{
        toast.error(response.data.message);
    }
}

  const {values,errors,handleChange,handleBlur,handleSubmit,touched,isSubmitting} = useFormik({
  initialValues:{
    name:"",
    privacy:"public",
    description:""
  },
  validationSchema:communitySchema,
  onSubmit
  });

  return (
    <div className={`w-full ${shower?`flex`:`hidden`} h-screen fixed z-[200] bg-[#0202028c] items-center justify-center`}>

      <form method='post' onSubmit={handleSubmit} className="bg-white w-[400px] pb-11 rounded-md">

       {/* the top header */}
        <div className="w-full flex justify-between items-center px-4 h-[40px]">
          <p className="font-sans font-semibold text-md">Create community</p>
          <BiX className='w-6 h-6 cursor-pointer' onClick={()=>dispatch(showCreateCommunity(false))}/>
        </div>

       {/* the form fields */}
       <div className="w-full flex flex-col gap-5 pl-[8%] pt-4">

        <div className="w-full">
          <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className="w-[90%] outline-none border-solid border-[1px] border-gray-200 text-md rounded-md h-[40px] pl-2" name="name" placeholder="channel name" autoComplete='off'/>
          <p className="text-red-500 text-sm pt-1">{errors.name && touched.name?errors.name:""}</p>
        </div>

        <div className="w-full">
         <select name="privacy" className='w-[90%] outline-none rounded-md h-[40px] border-solid border-[1px] border-gray-200'>
          <option value="public">Public</option>
          <option value="private">Private</option>
         </select>
        </div>

        <input type="file" id="profer" onChange={(e)=>setImage(e.target.files[0])} hidden/>
        
        <label htmlFor="profer">
        <div className="w-full">
        <div className='h-[40px] border-solid border-[1px] border-gray-200 rounded-md w-[90%] text-white bg-home flex items-center justify-center'>{image?"Profile uploaded successfully":"Upload community profile"}</div>
        </div>
        </label>

        <div className="w-full">
          <textarea name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} placeholder='channel description...' className='h-[100px] outline-none border-solid border-[1px] border-gray-200 text-sm p-2 w-[90%] rounded-md' autoComplete='off'></textarea>
          <p className="text-red-500 text-sm pt-1">{errors.description && touched.description?errors.description:""}</p>
        </div>

        <div className="w-full">
        <button type="submit" className='h-[40px] border-solid border-[1px] border-gray-200 rounded-md w-[90%] text-white bg-home'>Create community</button>
        </div>

       </div>

      </form>
      {/* end of the form */}

    </div>
  )
}

export default CreateCommunity;