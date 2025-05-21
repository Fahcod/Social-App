import React, { useContext,useState } from 'react'
import axios from "axios";
import { SocialContext } from '../../../context/SocialContext';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileTop = () => {

    const [image,setImage] = useState("");

    const {url,fetchUser} = useContext(SocialContext);

    const userData = useSelector((state)=>state.user);

    axios.defaults.withCredentials=true;

    const following = useSelector((state)=>state.user_info.following);
    const followers = useSelector((state)=>state.user_info.followers);

    const uploadProfile = async ()=>{
    
    let formData = new FormData();
    formData.append("user_bio","A proud fun to socialspot");
    formData.append("image",image);
    let response = await axios.put(`${url}/api/user/update-profile`,formData);
    if(response.data.success){
       toast.success(response.data.message);
       fetchUser();
       setImage("");
    }else{
        toast.error(response.data.message);
    }
}

  return (
    <div className='w-[100%] md:w-[87%] bg-white dark:bg-dark overflow-hidden'>

    <div>
        <img src={image?URL.createObjectURL(image):userData.profile?userData.profile:""} className="w-full h-[170px] md:h-[230px] rounded-md object-cover"/>
    </div>
    {/* The small image div */}
    <div className="w-full pl-3 flex justify-between items-center mt-[-6px] md:mt-[-50px]">

    <div className="flex items-center gap-3">
    <div className='mt-[-23px] md:mt-[-5px]'>
        <img src={image?URL.createObjectURL(image):userData.profile?userData.profile:""} className="w-[90px] h-[90px] md:w-[160px] md:h-[160px] rounded-full object-cover"/>
    </div>

    <div className="md:block hidden">
    <h2 className='font-rubik-bold text-md dark:text-white'>{userData?userData.username:""}</h2>
    <p className='text-sm text-[#454545] dark:text-[#808080] font-rubik leading-none'>followers {followers.length} following {following.length}</p>
    </div>

    </div>
   {/* The right div */}
    <div className='md:pr-0 pr-3'>
    {image?<></>:<label htmlFor='prof'>
    <div className='font-rubik-bold p-1 px-3 md:px-5 text-sm md:text-md md:py-2 rounded-md text-blue-600 border-solid border-[1px] border-blue-600'>Edit profile</div>
    </label>}

    {image?<button className='font-sans font-semibold p-1 px-3 md:px-5 text-sm md:text-md md:py-2 rounded-md text-blue-600 border-solid border-[1px] border-blue-600' onClick={()=>uploadProfile()}>Upload profile</button>:""}
    </div>

    <input type="file" name="image" id="prof" onChange={(e)=>setImage(e.target.files[0])} hidden/>

    </div>

    <div className='pl-4 pt-2 md:hidden'>
    <h2 className='font-sans font-bold text-md dark:text-white'>{userData?userData.username:""}</h2>
    <p className='text-sm text-[#454545] dark:text-[#808080] leading-none'>followers {followers.length} following {following.length}</p>
    </div>

    {/* The last profile page options */}
    <hr className="mt-3 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]"/>
    
    <div className="w-full flex px-4 md:px-0 items-center justify-between gap-11 md:gap-24 pt-2 dark:text-white">
    
     <Link to="/me/all">
     <p className="font-rubik cursor-pointer text-sm md:text-[16px]">Home</p>
     </Link>

     <Link to="/me/gallery">
     <p className="font-rubik cursor-pointer text-sm md:text-[16px]">Images</p>
     </Link>

     <p className="font-rubik cursor-pointer text-sm md:text-[16px]">Videos</p>
     <p className="font-rubik cursor-pointer text-sm md:text-[16px]">More</p>
    </div>
    <hr className="mt-3 dark:border-none dark:outline-none dark:h-[1px] dark:bg-[#333]"/>

    </div>
  )
}

export default ProfileTop;