import React from 'react';
import banner from '../../assets/home-main-banner.webp'
import './Banner.css';
const Banner = (props) => {
  return (
    <div className='Banner'>
      <img src={props.banner} alt='' />
      <h1 className='Banner-title'>{props.title}</h1>
      <div className='content'>
        <h5>{props.content}</h5>
      </div>
    </div>
  );
}

export default Banner;
