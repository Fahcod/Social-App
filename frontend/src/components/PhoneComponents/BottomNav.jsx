import { BiGroup, BiHome, BiMessageSquareDots, BiUser} from 'react-icons/bi';
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';


const BottomNav = () => {
  return (
    <div className='dark:bg-dark z-[150] dark:text-white flex items-center justify-between px-4 md:hidden w-full h-[60px] fixed bottom-0 bg-white border-solid border-t-[1px] border-gray-200 dark:border-[#333]'>
     
     <Link to="/home">
     <div className='flex flex-col items-center'>
     <BiHome className='w-7 h-7 text-icon dark:text-white'/>
     </div>
     </Link>

     <Link to="/friends">
     <div className='flex flex-col items-center'>
     <div className="relative">
     <BiGroup className='w-[30px] h-[30px] text-icon dark:text-white'/>
     <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 right-0"></div>
     </div>
     </div>
     </Link>
     <Link to="/videos">
     <div className='flex flex-col items-center'>
     <MdOndemandVideo className='w-[26px] h-[26px] text-icon dark:text-white'/>
     </div>
     </Link>

     <Link to="/messaging">
     <div className='flex flex-col items-center'>
     <div className="relative">
     <BiMessageSquareDots className='w-7 h-7 text-icon dark:text-white'/>
     <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0"></div>
     </div>
     </div>
     </Link>

    <Link to="/me/all">
     <div className='flex flex-col items-center'>
     <BiUser className='w-[25px] h-[25px] text-icon dark:text-white'/>
     </div>
     </Link>

    </div>
  );
}

export default BottomNav;