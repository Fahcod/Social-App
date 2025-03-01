import React from 'react';
import { BiBell, BiGroup, BiHome, BiMessageSquareDots} from 'react-icons/bi';
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';

const ChannelNav = () => {
  return (
    <div className='flex dark:bg-dark dark:text-white items-center justify-between px-4 md:hidden w-full h-[60px] fixed bottom-0 bg-white border-solid border-t-[1px] border-gray-200 dark:border-[#333]'>
     
     <Link to="/">
     <div>
     <BiHome className='w-7 h-7'/>
     </div>
     </Link>

     <Link to="/channels">
     <div>
     <BiGroup className='w-7 h-7'/>
     </div>
     </Link>

     <div>
     <MdOndemandVideo className='w-6 h-6'/>
     </div>

     <Link to="/messaging">
     <div>
     <BiMessageSquareDots className='w-7 h-7'/>
     </div>
     </Link>

     <div>
     <BiBell className='w-7 h-7'/>
     </div>

    </div>
  );
}

export default ChannelNav;