import React, { useEffect } from 'react';
import './Header.css';
import burger_btn from '../../assets/burger_btn.png';
import contact from '../../assets/account_img.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import flag_pak from '../../assets/flag_pk.png';
import flag_eu from '../../assets/flag_eu.png';
import flag_gcc from '../../assets/flag_gcc.png';
import flag_uk from '../../assets/flag_uk.png';
import flag_us from '../../assets/flag_us.webp';
import logo from '../../assets/LOGO.png';
//import SideBar from '../sideBar/sideBar';


//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = ({ toggleSidebar }, props) => {
  const [dropImage, setdropIMage] = useState(flag_pak)
  const [hContact, sethContact] = useState('UAN/WhatsApp: 021-111-003-005')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (dropImage === flag_us) {
      sethContact('In Pakistan, a flat fee of PKR 190 will be charged on all orders | Free International Shipping Above 300 USD (T&C Apply) - UAN/WhatsApp: 021-111-003-005')
    }
    else if (dropImage === flag_gcc) {
      sethContact('In Pakistan, a flat fee of PKR 190 will be charged on all orders | Free International Shipping Above 300 AED (T&C Apply) - UAN/WhatsApp: 021-111-003-005')
    }
    else if (dropImage === flag_eu) {
      sethContact('In Pakistan, a flat fee of PKR 190 will be charged on all orders | Free International Shipping Above 300 EURO (T&C Apply) - UAN/WhatsApp: 021-111-003-005')
    }
    else if (dropImage === flag_uk) {
      sethContact('In Pakistan, a flat fee of PKR 190 will be charged on all orders | Free International Shipping Above GBP 300  (T&C Apply) - UAN/WhatsApp: 021-111-003-005')
    }
    else if (dropImage === flag_pak) {
      sethContact('UAN/WhatsApp: 021-111-003-005')
    }
  }, [dropImage])

  useEffect(() => {
    if (dropImage !== flag_pak) {
      document.getElementById('hContact').style.color = '#878787'
    }
  }, [dropImage])

  return (
    <div className='header'>
      <div className='header-upper'>
        <div className='header-contact-num'>
          <marquee  direction="left" loop='' ><p id='hContact'>{hContact}</p></marquee>
        </div>
      </div>
      <div className='header-lower'>
        <div className='header-lower-left'>
          <div className='header-lower-left-burger-btn'>
            <img src={burger_btn} alt='' width='30px' height='30px' onMouseEnter={toggleSidebar} />
          </div>
        </div>
        <div className='header-lower-middle'>
          <a href='/' className='logo'>
            <img
              src={logo}
              alt=''
              height='54px'
              id='logo'
            />
          </a>
        </div>
        <div className='header-lower-right'>
          <div className='header-lower-right-search'>
            <svg xmlns="http://www.w3.org/2000/svg" width='28px' height='24px' fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <p>Search</p>
          </div>
          <div className={`header-lower-right-country ${props.nav}`}>
            <img width='36px' height='25px' src={dropImage} alt='' />
            <div >
              <ul className="navbar-nav">
                <div className="nav-item">
                  <div className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  </div>
                  <ul className="dropdown-menu">
                    <li onClick={() => { setdropIMage(flag_pak) }}><a className="dropdown-item" ><span>Pakistan</span><img src={flag_pak} alt='' /></a></li>
                    <li onClick={() => { setdropIMage(flag_eu) }}><a className="dropdown-item" ><span>Europe</span><img src={flag_eu} alt='' /></a></li>
                    <li onClick={() => { setdropIMage(flag_gcc) }}><a className="dropdown-item" ><span>Middle East</span><img src={flag_gcc} alt='' /></a></li>
                    <li onClick={() => { setdropIMage(flag_uk) }}><a className="dropdown-item" ><span>United Kingdom</span><img src={flag_uk} alt='' /></a></li>
                    <li onClick={() => { setdropIMage(flag_us) }}><a className="dropdown-item"><span>US, Canada and <br /> Rest of World</span><img src={flag_us} alt='' /></a></li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
          <div className='header-lower-right-whatsApp'>
            <img width='30px' height='30px' src='https://www.sanasafinaz.com/static/version1728245196/frontend/RLTSquare/SanaSafinaz/en_US/RLTSquare_WhatsAppChat/images/whatsapp.SVG' alt='WhatsApp' />
            <p>Whatsapp</p>
          </div>
          <div className='header-lower-right-tracking'>
            <img id='tracking' width='30px' height='30px' src='https://www.sanasafinaz.com/static/version1728245196/frontend/RLTSquare/SanaSafinaz/en_US/images/Svg/Shipping.SVG'
              alt='' />
            <p>Tracking</p>
          </div>

          <div className='header-lower-right-contact'>
            <div className="btn-group">
              <div className='btn_inside'>
                <button type="button" class="btn btn-close-white " data-bs-toggle="dropdown" aria-expanded="false">

                  <img width='30px' height='30px' src={contact} alt='' />


                </button>
                <p>Account</p>
                <ul className="dropdown-menu">
                  <div>
                  <h2>Welcome to Sana Safinaz</h2>
                  <li><a className="dropdown-item" href="/Login">Sign in</a></li>
                  <li><a className="dropdown-item" href="/createaccount">Create Account</a></li>
                  </div>
                </ul>
              </div>

            </div>
          </div>


          <div className='header-lower-right-cart'>
            <p className='counter'>{count}</p>
            <a href='/cart'> <svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30px' fill="black" className="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg></a>

            <p>Cart</p>
          </div>
        </div>
      </div>

    </div>
  );
}


export default Header;
