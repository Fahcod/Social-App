import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CenterCont from './CenterCont';
import BottomNav from '../../components/PhoneComponents/BottomNav';

const Notifications = () => {
  return (
    <>
      <Navbar/>

      <div className="flex w-full justify-center">
      <CenterCont/>
      </div>
      <BottomNav/>

    </>
  );
}

export default Notifications;
