import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChat } from '../../../features/userSlice';
import { setShowContacts } from '../../../features/slidersSlice';

const ChatItem = (props) => {

  const dispatch = useDispatch();

  const onlineUsers = useSelector((state)=>state.user_info.online_friends);

  return (
    <div className="w-full flex rounded-md p-2 justify-between cursor-pointer hover:bg-[#f5f3f3] dark:hover:bg-[#222]" onClick={()=>{
      dispatch(setCurrentChat({
        _id:props._id,
        username:props.username,
        profile:props.profile,
        user_bio:props.user_bio
      }));

      dispatch(setShowContacts(false))
    }}>

    <div className="flex gap-2">
    <div className='relative'>
      {onlineUsers.includes(props._id)?<div className="w-3 h-3 rounded-full bg-green-600] absolute"></div>:""}
        <img src={props.profile} className='w-[45px] h-[45px] rounded-full object-cover'/>
    </div>
    <div className='pt-1'>
        <h2 className='font-sans font-semibold dark:text-white'>{props.username}</h2>
        {onlineUsers.includes(props._id)?<p className='text-green-500 leading-none text-sm'>online</p>:<p className='text-[#454545] leading-none text-sm'>Wa that really required...</p>}
    </div>
</div>

<div>
<p className='text-xs text-[#454545] pt-2'>10:02 AM</p>
</div>

</div>
  );
}

export default ChatItem;