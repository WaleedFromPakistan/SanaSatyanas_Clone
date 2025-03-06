import { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import './sideBar.css';
function SideBar({ state ,onClose }) {
    const [isMenuVisible, setMenuVisible] = useState({
        sideBar: state,
        sales: false,
        newArrivals: false,
        unstitchedFabric: false,
        readyToWear: false,
        bottoms: false,
        kids: false,
        accessories: false,
        shoes: false,
        couture: false,
        home: false,
    });

    const toggleMenu = (menu) => {
        setMenuVisible((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <div className={`sideBar ${state ? 'visible' : 'hidden'}`}>
            <div className="top-sidebar">
                <h4>MENU</h4>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png"
                    alt="close icon"
                    onClick={onClose} // Or pass a callback to hide the sidebar in the parent
                />
            </div>                <div className="navbar">
                <ul>
                    <li>
                        <Link to="#">SALES</Link>
                        {isMenuVisible.sales ? (
                            <i className="fas fa-minus" onClick={() => toggleMenu('sales')}></i>
                        ) : (
                            <i className="fa-light fa-plus" onClick={() => toggleMenu('sales')}></i>
                        )}
                    </li>
                    {isMenuVisible.sales && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">READY TO WEAR</Link></li>
                                <li><Link to="#">UNSTITCHED FABRIC</Link></li>
                                <li><Link to="#">ACCESSORIES</Link></li>
                                <li><Link to="/home">KIDS</Link></li>
                                <li><Link to="/home">HOME</Link></li>
                                <li><Link to="#">BOTTOMS</Link></li>
                            </ul>
                        </div>
                    )}

                    {/* Similar structure for other menu items */}

                    <li><Link to="#">NEW ARRIVALS</Link>
                        {isMenuVisible.newArrivals ? (
                            <i className="fas fa-minus" onClick={() => toggleMenu('newArrivals')}></i>
                        ) : (
                            <i className="fa-light fa-plus" onClick={() => toggleMenu('newArrivals')}></i>
                        )}
                    </li>


                    {isMenuVisible.newArrivals && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">READY TO WEAR</Link></li>
                                <li><Link to="#">SS WEST</Link></li>
                                <li><Link to="#">UNSTITCHED FABRIC</Link></li>
                                <li><Link to="#">KIDS</Link></li>
                                <li><Link to="#">ACCESSORIES</Link></li>
                                <li><Link to="#">LUXURY PRET</Link></li>
                                <li><Link to="#">HOME</Link></li>
                                <li><Link to="#">SHOES</Link></li>
                                <li><Link to="#">FRAGRANCES</Link></li>
                            </ul>
                        </div>)}
                    <li><Link to="#">SS WEST</Link></li>
                    <li><Link to="#">UNSTITCHED FABRIC</Link>
                        {isMenuVisible.unstitchedFabric ? <i class="fas fa-minus" onClick={() => toggleMenu('unstitchedFabric')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('unstitchedFabric')}></i>
                        }
                    </li>
                    {isMenuVisible.unstitchedFabric && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">MUZLIN WINTER'24</Link></li>
                                <li><Link to="#">NURA VOL.3 2024</Link></li>
                                <li><Link to="#">MAHAY WINTER'24</Link></li>
                                <li><Link to="#">NURA FESTIVAL'24 VOL.II</Link></li>
                                <li><Link to="#">MUZLIN SUMMER'24 VOL.2</Link></li>
                                <li><Link to="#">MAHAY SUMMER'24 VOL.2</Link></li>
                                <li><Link to="#">NURA FESTIVAL'24 VOL.1</Link></li>
                                <li><Link to="#">LUXURY COLLECTION'24</Link></li>
                                <li><Link to="#">MUZLIN SPRING'24 VOL.1</Link></li>
                                <li><Link to="#">Mahay Spring'24 VOL.1</Link></li>
                                <li><Link to="#">NURA VOL.III-FESTIVE COLLECTION'23</Link></li>
                                <li><Link to="#">WINTER LUXURY'23</Link></li>
                                <li><Link to="#">MAHAY WINTER'23</Link></li>
                                <li><Link to="#">NURA VOL.II-FESTIVE COLLECTION'23</Link></li>
                            </ul>
                        </div>)}
                    <li><Link to="#">READY TO WEAR</Link>
                        {isMenuVisible.readyToWear ? <i class="fas fa-minus" onClick={() => toggleMenu('readyToWear')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('readyToWear')}></i>
                        }
                    </li>
                    {isMenuVisible.readyToWear && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">BASIC</Link></li>
                                <li><Link to="#">ESSENTIAL</Link></li>
                                <li><Link to="#">SIGNATURE</Link></li>
                                <li><Link to="#">EXCLUSIVE</Link></li>
                                <li><Link to="#">SILK TUNICS</Link></li>
                                <li><Link to="#">CAPSULE</Link></li>
                                <li><Link to="#">MONOCHROME COLLECTION</Link></li>
                                <li><Link to="#">NURA FESTIVE COLLECTION</Link></li>
                            </ul>
                        </div>)}
                    <li><Link to="#">BOTTOMS</Link>
                        {isMenuVisible.bottoms ? <i class="fas fa-minus" onClick={() => toggleMenu('bottoms')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('bottoms')}></i>
                        }
                    </li>
                    {isMenuVisible.bottoms && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">SHALWAR</Link></li>
                                <li><Link to="#">TROUSERS</Link></li>
                                <li><Link to="#">GHARARA</Link></li>
                                <li><Link to="#">EMBROIDERED BOTTOMS</Link></li>
                            </ul>
                        </div>)}

                    <li>
                        <Link to="#">KIDS</Link>
                        {isMenuVisible.kids ? <i class="fas fa-minus" onClick={() => toggleMenu('kids')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('kids')}></i>
                        }
                    </li>

                    {isMenuVisible.kids && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">BASIC</Link></li>
                                <li><Link to="#">ESSENTIAL</Link></li>
                                <li><Link to="#">SIGNATURE</Link></li>
                                <li><Link to="#">WESTERN WEAR</Link></li>
                                <li><Link to="#">BOTTOMS</Link></li>
                                <li><Link to="#">EXCLUSIVE</Link></li>
                                <li><Link to="#">DUPATTA</Link></li>
                            </ul>
                        </div>)}

                    <li>
                        <Link to="#">ACCESSORIES</Link>
                        {isMenuVisible.accessories ? <i class="fas fa-minus" onClick={() => toggleMenu('accessories')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('accessories')}></i>
                        }
                    </li>
                    {isMenuVisible.accessories && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">DUPATTA</Link></li>
                            </ul>
                        </div>)}

                    <li>
                        <Link to="#">SHOES</Link>
                        {isMenuVisible.shoes ? <i class="fas fa-minus" onClick={() => toggleMenu('shoes')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('shoes')}></i>
                        }
                    </li>
                    {isMenuVisible.shoes && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">KIDS</Link></li>
                                <li><Link to="#">WOMEN</Link></li>
                            </ul>
                        </div>)}
                    <li><Link to="#">LUXURY PRET</Link></li>
                    <li>
                        <Link to="#">COUTURE</Link>
                        {isMenuVisible.couture ? <i class="fas fa-minus" onClick={() => toggleMenu('couture')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('couture')}></i>
                        }
                    </li>
                    {isMenuVisible.couture && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">RESORT WEAR</Link></li>
                                <li><Link to="#">SECRET SCANDAL</Link></li>
                                <li><Link to="#">SIGNATURE</Link></li>
                                <li><Link to="#">WESTERN WEAR</Link></li>
                                <li><Link to="#">BOTTOMS</Link></li>
                                <li><Link to="#">EXCLUSIVE</Link></li>
                                <li><Link to="#">DUPATTA</Link></li>
                            </ul>
                        </div>)}
                    <li><Link to="#">BRIDAL</Link></li>
                    <li><Link to="#">FRAGRANCES</Link></li>
                    <li>
                        <Link to="/home">HOME</Link>
                        {isMenuVisible.home ? <i class="fas fa-minus" onClick={() => toggleMenu('home')}></i> : <i className="fa-light fa-plus" onClick={() => toggleMenu('home')}></i>
                        }
                    </li>
                    {isMenuVisible.home && (
                        <div>
                            <ul className="nav-in-menu">
                                <li><Link to="#">RESORT WEAR</Link></li>
                                <li><Link to="#">SECRET SCANDAL</Link></li>
                                <li><Link to="#">SIGNATURE</Link></li>
                                <li><Link to="#">WESTERN WEAR</Link></li>
                                <li><Link to="#">BOTTOMS</Link></li>
                                <li><Link to="#">EXCLUSIVE</Link></li>
                                <li><Link to="#">DUPATTA</Link></li>
                            </ul>
                        </div>)}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
