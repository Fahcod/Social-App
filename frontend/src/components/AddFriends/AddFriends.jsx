import FriendBox from '../FriendBox/FriendBox';
import { useSelector } from 'react-redux';


const AddFriends = () => {

  const users = useSelector((state)=>state.users.all_users);
  const userData = useSelector((state)=>state.user);
  const friends = useSelector((state)=>state.user_info.friends)

  //Get the friends without me the loggd in user
  const dropUserId = users.map((item)=>{
  if(item._id !== userData._id){
    return item
  }
  });

  //Return a new users array without undefined fields
  const cleanIds = dropUserId.filter((item)=>{
    return item !== undefined
  });

  //generate only people who are not friends
  function generateNonFriends(){
    let result;
    let removeFriends = cleanIds.map((item)=>{
      if(!friends.includes(item._id)){
        return item
      }
    });
    let cleanNewFriends = removeFriends.filter((item)=>{
      return item !== undefined
    });
    result = cleanNewFriends;
    return result;
  }

  const friendList = generateNonFriends();

  return (
    <div className='relative overflow-x-auto [&::-webkit-scrollbar]:hidden w-[100%] md:w-[90%] rounded-sm mt-4 flex gap-5 items-center px-4'>
    {friendList.slice(-5).map((item,index)=>{
      return <FriendBox key={index} _id={item._id} profile={item.profile} username={item.username}/>
    })}
    </div>
  )
}

export default AddFriends;