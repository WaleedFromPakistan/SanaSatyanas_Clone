import React from 'react';
import './Header.css';
import logo from '../../assets/LOGO.png'
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-img'>
                <Link to='/'>
                    <img src={logo} />
                </Link>
            </div>
            <div className='Header-heading'>
                <h1>ADMIN PANEL</h1>
            </div>
            <hr />
        </div>
    );
}

export default Header;
