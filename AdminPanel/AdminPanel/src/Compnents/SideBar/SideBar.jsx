import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { useLocation } from 'react-router-dom';
import add from '../../assets/add.svg';
import view from '../../assets/view-list.svg';
import home from '../../assets/home.svg';
import minus from '../../assets/minus.svg';

const SideBar = () => {
    const [isMenuVisible, setMenuVisible] = useState({
        Home: false,
        Accessories: false,
        Clothing: false
    });

    const toggleMenu = (menu) => {
        setMenuVisible((prevState) => ({
            ...prevState, [menu]: !prevState[menu],
        }));
    };

    const location = useLocation();

    return (
        <div className='sidebar-container'>
            <div className="navbar">
                <ul className="menu-list">
                    <li className='menu-item'>
                        <div className='menu-box' onClick={() => toggleMenu('Home')}>
                            <h2><Link to={'/'} onClick={() => { window.location.replace('/') }} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></h2>
                        </div>
                    </li>
                    <hr />

                    <li className='menu-item'>
                        <div className='menu-box' onClick={() => toggleMenu('Accessories')}>
                            <h2>Accessories</h2>

                        </div>
                        {isMenuVisible.Accessories && (
                            <div className='dialog-box'>
                                <ul className="nav-in-menu">
                                <li>
                                        <Link to="/add-Accessories-category" className='menu-link'>Add Category</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </li>
                                <li>
                                        <Link to="/all-Accessories-Categories" className='menu-link'>View all Categories</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-view-list" viewBox="0 0 16 16">
                                            <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                                        </svg>
                                    </li>
                                    <li>
                                        <Link to="/addAccessories" className='menu-link'>Add new Accessories</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </li>
                                    <li>
                                        <Link to="/all-Accessories" className='menu-link'>View all Accessories</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-view-list" viewBox="0 0 16 16">
                                            <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <hr />

                    <li className='menu-item'>
                        <div className='menu-box' onClick={() => toggleMenu('Clothing')}>

                            <h2>Clothing</h2>
                        </div>
                        {isMenuVisible.Clothing && (
                            <div className='dialog-box'>
                                <ul className="nav-in-menu">
                                    <li>
                                        <Link to="/addClothing" className='menu-link'>Add new Clothing</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </li>
                                    <li>
                                        <Link to="/all-Clothings" className='menu-link'>View all Clothing</Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-view-list" viewBox="0 0 16 16">
                                            <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <hr />
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
