import React, { useContext } from 'react';
import {useFormik} from "formik";
import { signupSchema } from '../../schemas/schemas';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SocialContext } from '../../context/SocialContext';


const Signup = () => {

    const {url,fetchUser} = useContext(SocialContext);

    axios.defaults.withCredentials=true;

    const navigate = useNavigate();

    const sendData = async (values,actions) =>{
    
    let response = await axios.post(`${url}/api/user/signup`,values);

    if(response.data.success){
    localStorage.setItem("CONN_ID_NUM",response.data.userId);
    navigate("/");
    fetchUser();
    actions.resetForm()
    }else{
    toast.error(response.data.message)   
    }

    }

    const onSubmit = (values,actions)=>{
    sendData(values,actions);
    }

   const {values,errors,isSubmitting,handleChange,touched,handleSubmit,handleBlur} = useFormik({
    initialValues:{
        username:"",
        email:"",
        country:"Uganda",
        password:""
    },
   validationSchema:signupSchema,
   onSubmit
   });

  return (
    <div className='w-full bg-white md:bg-[#efefef] flex items-center justify-center h-screen dark:bg-dark'>
    
    <form method="post" onSubmit={handleSubmit} className="w-[98%] md:w-[400px] pb-6 bg-white rounded-md dark:bg-dark md:dark:bg-[#202020]">

        <div>
            <h1 className='text-home text-center pt-5 font-sans font-black text-xl'>Signup for Socialspot</h1>
        </div>

        {/* The form fields */}
        <div className="w-full flex flex-col pt-3 pl-[8%]">

        <div className="w-full mt-7">
            <input type="text" value={values.username} onBlur={handleBlur} onChange={handleChange} className='w-[90%] p-2 outline-0 border-solid border-[1px] rounded-md border-[#cacaca] dark:border-[#333] dark:text-white dark:bg-[#333]' placeholder='Your full name' name="username" autoComplete='off'/>
            <p className='text-xs text-red-500'>{errors.username && touched.username?errors.username:""}</p>
        </div>

        <div className="w-full mt-7">
            <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className='w-[90%] p-2 outline-0 border-solid border-[1px] rounded-md border-[#cacaca] dark:border-[#333] dark:text-white dark:bg-[#333]' placeholder='Your email' name="email" autoComplete='off'/>
            <p className='text-xs text-red-500'>{errors.email && touched.email?errors.email:""}</p>
        </div>

        <div className="w-full mt-7">
           <select name="country" value={values.country} onBlur={handleBlur} onChange={handleChange} className='rounded-md p-2 outline-none w-[90%] border-solid border-[1px] border-[#cacaca] dark:border-[#333] dark:text-white dark:bg-[#333]'>
           <option value="Uganda">Uganda</option>
           </select>
        </div>

        <div className="w-full mt-7">
            <input type="password" value={values.password} onBlur={handleBlur} onChange={handleChange} className='w-[90%] p-2 outline-0 border-solid border-[1px] rounded-md border-[#cacaca] dark:border-[#333] dark:text-white dark:bg-[#333]' placeholder='Your password' name="password" autoComplete='off'/>
            <p className='text-xs text-red-500'>{errors.password && touched.password?errors.password:""}</p>
        </div>

        {/* User agree */}
        <div className="flex gap-2 items-center mt-4">
            <input type="checkbox" />
            <p className='text-sm dark:text-[#808080]'>I agree to the terms and conditions</p>
        </div>

        <div className="w-full mt-4">
            {isSubmitting?<button className='text-white w-[90%] p-2 outline-0 bg-home rounded-md' type="button">Submitting</button>:<input type="submit" value="Create account" className='text-white w-[90%] p-2 outline-0 bg-home rounded-md' placeholder='Your email' name="username" autoComplete='off'/>}
        </div>

        <div className="mt-4">
            <p className="text-sm dark:text-[#808080]">Already have an account?<Link to="/login">Login here</Link></p>
        </div>

        </div>
    
    </form>

    </div>
  )
}

export default Signup;