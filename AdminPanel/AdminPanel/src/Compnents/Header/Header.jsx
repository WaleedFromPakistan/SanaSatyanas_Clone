import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-img'>
                <Link to='/'>
                    <img src='https://www.sanasafinaz.com/static/version1730381829/frontend/RLTSquare/SanaSafinaz/en_US/images/S-SBlack.png' />
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
