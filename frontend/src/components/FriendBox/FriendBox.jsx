import React, { useContext } from 'react'
import { SocialContext } from '../../context/SocialContext';

const FriendBox = (props) => {

  const {addFriend} = useContext(SocialContext);

  return (
    <div className="relative w-[110px] md:w-[150px] overflow-hidden bg-[linear-gradient(transparent,rgba(4,9,30,0.7))] h-[90%] rounded-md flex-shrink-0">
    <img src={props.profile} className="w-full h-full object-cover absolute z-[-1]"/>
    
    <div className="w-full h-full px-2 md:pt-[110%] pt-[110%]">
   <div>
    <h3 className='font-sans text-white text-sm md:text-md md:font-bold'>{props.username.slice(0,10)}...</h3>
    <button className='mt-1 w-full py-1 text-xs md:text-sm text-white bg-home rounded-md' onClick={()=>addFriend(props._id)}>Add friend</button>
   </div>
    </div>

    </div>
  )
}

export default FriendBox;