import React,{useContext} from 'react';
import {useFormik} from "formik";
import { LoginSchema } from '../../schemas/schemas';
import axios from "axios";
import { Link } from 'react-router-dom';
import { SocialContext } from '../../context/SocialContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {url,fetchUser} = useContext(SocialContext);

    axios.defaults.withCredentials=true;

    const navigate = useNavigate();

    const sendData = async (values,actions) =>{
    
    let response = await axios.post(`${url}/api/user/login`,values);

    if(response.data.success){
    fetchUser();
    navigate("/");
    actions.resetForm()
    localStorage.setItem("CONN_ID_NUM",response.data.userId);
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
        password:""
    },
   validationSchema:LoginSchema,
   onSubmit
   });

  return (
    <div className='w-full bg-[#fff] md:bg-[#efefef] flex items-center justify-center h-screen dark:bg-dark'>
    
    <form method="post" onSubmit={handleSubmit} className="w-[95%] md:w-[400px] pb-6 bg-white rounded-md dark:bg-dark md:dark:bg-[#202020]">

        <div>
            <h1 className='text-home text-center pt-5 font-sans font-black text-xl'>Login to Socialspot</h1>
        </div>

        {/* The form fields */}
        <div className="w-full flex flex-col pt-3 pl-[8%]">

        <div className="w-full mt-7">
            <input type="text" value={values.username} onBlur={handleBlur} onChange={handleChange} className='w-[90%] p-2 outline-0 border-solid border-[1px] rounded-md border-[#cacaca] bg-white dark:border-[#333] dark:text-white dark:bg-[#333]' placeholder='Your full name' name="username" autoComplete='off'/>
            <p className='text-xs text-red-500'>{errors.username && touched.username?errors.username:""}</p>
        </div>

        <div className="w-full mt-7">
            <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className='w-[90%] p-2 outline-0 border-solid border-[1px] rounded-md border-[#cacaca] dark:border-[#333] dark:text-white dark:bg-[#333]' placeholder='Your email' name="email" autoComplete='off'/>
            <p className='text-xs text-red-500'>{errors.email && touched.email?errors.email:""}</p>
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
        {isSubmitting?<button type="button" className='text-white w-[90%] p-2 outline-0 bg-home rounded-md'>Submitting</button>:<input type="submit" value="Login to account" className={`text-white w-[90%] p-2 outline-0 bg-home rounded-md`} placeholder='Your email' name="username" autoComplete='off'/>}
        </div>

        <div className="mt-4">
            <p className="text-sm dark:text-[#808080]">Don't have an account?<Link to="/signup">Signup here</Link></p>
        </div>

        </div>
    
    </form>

    </div>
  )
}

export default Login;