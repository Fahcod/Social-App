import React, { useContext, useEffect, useState } from 'react'
import { FaChevronLeft, FaPaperPlane } from 'react-icons/fa6';
import Message from '../Message/Message';
import OtherMessage from '../OtherMessage/OtherMessage';
import { SocialContext } from '../../../context/SocialContext';
import { useDispatch, useSelector } from 'react-redux';
import {setShowContacts} from "../../../features/slidersSlice"
import { BiDotsVerticalRounded } from 'react-icons/bi';
import axios from "axios";

const CenterCont = () => {

  axios.defaults.withCredentials=true;

  const {sendMessage,url,getChatMessages} = useContext(SocialContext);

  const [text,setText] = useState("");

  const messages = useSelector((state)=>state.messages.all_messages);
  const user = useSelector((state)=>state.user);
  const onlineUsers = useSelector((state)=>state.user_info.online_friends);

  const currentUser = useSelector((state)=>state.user.current_chat)

  const dispatch = useDispatch();

  // function to update the messages
  const updateMessages = async ()=>{
    let response = await axios.put(`${url}/api/messages/update`,{})
    if(response.data.success){
     getChatMessages()
    }else{
      console.error(response.data.message)
    }
  }

  // call the function once when the component is rendered
  useEffect(()=>{
    updateMessages();
  },[])

  return (
    <div className='w-full md:w-[70%] md:ml-[30%] relative'>

   {/* the nav bar */}
   <div className="sticky flex items-center bg-white justify-between px-2 md:px-4 top-0 w-full h-[60px] border-solid border-b-[1px] border-gray-200">
   <div className='flex items-center gap-2'>
    <div className='flex items-center gap-1'>
      <div className='md:hidden'>
        <FaChevronLeft className='w-5 h-5' onClick={()=>dispatch(setShowContacts(true))}/>
      </div>
      <img src={currentUser?.profile} className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full object-cover"/>
    </div>
    <div>
      <h2 className="font-sans font-semibold">{currentUser?.username}</h2>
      <p className="leading-none text-xs md:text-sm">{onlineUsers.includes(currentUser._id)?'online':'Last seen yesterday 10:32 AM'}</p>
    </div>
   </div>
   {/* the last div */}
   <div>
    <BiDotsVerticalRounded className='w-7 h-7 cursor-pointer'/>
   </div>
   </div>

    {/* Messsage container */}
    <div className="w-full pt-8 px-4 pb-24">
     {messages.map((item,index)=>{
     if(item.from === user._id){
      return <Message key={index} message={item.message}/>
     }else{
      return <OtherMessage key={index} message={item.message}/>
     }
     })}
    </div>

    {/* Bottom bar */}
    <div className="px-4 fixed bg-white dark:bg-dark flex items-center gap-2 border-solid border-t-[1px] border-gray-200 dark:border-[#333] h-[60px] bottom-0 w-[100%] sm:w-[70%]">
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='dark:bg-[#333] dark:text-[#808080] h-[37px] w-[96%] px-3 border-none outline-none rounded-3xl' placeholder='type your message here...'/>
    <div className='bg-home p-2 rounded-full'>
    <FaPaperPlane className='text-white' onClick={()=>{
      sendMessage(text);
      setText("")
      }}/>
    </div>
    </div>

    </div>
  )
}

export default CenterCont;