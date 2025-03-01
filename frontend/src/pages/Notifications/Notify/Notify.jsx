import React from 'react'
import { BiX } from 'react-icons/bi';


const Notify = (props) => {
  return (
    <div className="w-full bg-white p-2 rounded-md dark:bg-[#202020]">

    <div className='flex w-full justify-between'>

    <div className="flex gap-2">
    <div>
        <img src={props.from.profile} className="flex-shrink-0 w-[38px] h-[38px] rounded-full object-cover"/>
    </div>
    <div className='pt-1'>
        <h2 className="font-sans dark:text-white font-semibold leading-none">{props.from.username}</h2>
        <p className='text-[#454545] dark:text-[#808080] text-sm leading-none'>2d ago</p>
    </div>
    </div>

    <div>
        <BiX className='w-6 h-6 cursor-pointer dark:text-white'/>
    </div>
    </div>

    <div>
       <p className='text-sm dark:text-[#d1d0d0] pt-1'>{props.message}</p>
    </div>

    </div>
  )
}

export default Notify;