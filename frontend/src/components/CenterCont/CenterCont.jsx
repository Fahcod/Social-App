import React from 'react';
import TopCont from '../TopCont/TopCont';
import AddFriends from '../AddFriends/AddFriends';
import PostCont from '../PostCont/PostCont';
import BottomNav from '../PhoneComponents/BottomNav';

const CenterCont = () => {
  return (
    <div className="pt-2 w-[100%] md:w-[50%] md:ml-[25%] flex items-center flex-col">
    <TopCont/>
    <AddFriends/>
    <PostCont/>
    <BottomNav/>
    </div>
  );
}

export default CenterCont;