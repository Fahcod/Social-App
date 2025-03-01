import React, { useContext, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa6';
import Message from '../Message/Message';
import OtherMessage from '../OtherMessage/OtherMessage';
import { SocialContext } from '../../../context/SocialContext';
import { useSelector } from 'react-redux';

const CenterCont = () => {

  const {sendMessage} = useContext(SocialContext);

  const [text,setText] = useState("");

  const messages = useSelector((state)=>state.messages.all_messages);
  const user = useSelector((state)=>state.user);

  return (
    <div className='w-[50%] ml-[25%]'>

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
    <div className="px-4 fixed bg-white dark:bg-dark flex items-center gap-2 border-solid border-t-[1px] border-gray-200 dark:border-[#333] h-[60px] bottom-0 w-[50%]">
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