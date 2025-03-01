import React from 'react'
import Notify from './Notify/Notify';
import { useSelector } from 'react-redux';

const CenterCont = () => {

    const notifications = useSelector((state)=>state.user.notifications);

    console.log(notifications);

  return (
    <div className='h-screen w-[100%] md:w-[50%] border-solid border-l-[1px] border-r-[1px] border-gray-200 dark:border-[#333] flex flex-col pt-4 gap-4 px-2 md:px-10'>
    {notifications.map((item,index)=>{
        return <Notify key={index} from={item.from} message={item.message}/>
    })}
    </div>
  )
}

export default CenterCont;