import React, { useContext } from 'react'
import { SocialContext } from '../../context/SocialContext';

const FriendBox = (props) => {

  const {addFriend} = useContext(SocialContext);

  return (
   <div className="items-center h-[240px] pt-4 flex flex-col gap-4 w-[140px] md:w-[158px] flex-shrink-0 md:h-[250px] border-solid border border-gray-300 rounded-md">
   <div>
    <img src={props.profile} className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] rounded-full"/>
   </div>
   <div>
    <h2 className="font-rubik-bold">{props.username.slice(0,10)}{props.username.length>10?'...':''}</h2>
   </div>
   <div>
    <button onClick={()=>addFriend(props._id)} className="font-rubik text-sm bg-home text-white py-2 px-3 rounded-md">Add new friend</button>
   </div>
   </div>
  )
}

export default FriendBox;