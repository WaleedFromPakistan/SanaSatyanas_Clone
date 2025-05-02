import React from 'react';
import logo from '../../assets/logo.png';
import './SplashScreen.css';
const SplashScreen = () => {
  return (
    <div>
       <div className='main'>
      <img src={logo} alt="Logo"  />
    </div>
    </div>
  );
}

export default SplashScreen;
