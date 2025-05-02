import  { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from '../../Pages/Home';
import DisplayPage from '../../Pages/DisplayPage';
import LoginSignup from '../../Pages/LoginSignup';
import ItemDetail from '../../Pages/ItemDetail';
import Cart from '../../Pages/Cart';
import DisplayPageDynamic from '../../Pages/DisplayPageDynamic'

// Components
import Card from '../Card/Card';
import ScrollButton from '../ScrollButton/ScrollButton';
import OrderConfirm from '../OrderConfirm/OrderConfirm';

// Assets
import Product from '../../assets/Product1.json';
import Banner from '../../assets/home-main-banner.webp';


import ScrollToTop from '../ScrollTop/scrollTop';
// Context
import { ShopContext } from '../Context/Context';
import Tracking from '../../Pages/Tracking';

const Main = () => {
    const { products } = useContext(ShopContext);
    
    console.log(products[0]);
    return (
        <div>
            <BrowserRouter>
             <ScrollToTop/>
                <Routes>
                    {/* Home Page */}
                    <Route
                        path='/'
                        element={<Home title='Home' banner={Banner} category='Home' />}
                    />

                    {/* DisplayPage Routes for Static Product Data */}
                    {Product.map((product, index) => (
                        <Route
                            key={index}
                            path={`/home/${product.category}`}
                            element={<DisplayPage category={product.category} />}
                        />
                    ))}

                    {/* ShopPage Routes for Dynamic Product Data from Context */}
                    {products.map((prd, index) => (
                        Product.map((item) =>
                            item.category === prd.Category
                                ? item.sub_categories.map((subCategory, subIndex) =>
                                    subCategory.category === prd.sub_category ? (
                                        <Route
                                            key={`dynamic-${index}-${subIndex}`}
                                            path={`/home/${prd.Category}/${subCategory.category}`}
                                            element={<DisplayPageDynamic category={prd.sub_category} />}
                                        />
                                    ) : null
                                  )
                                : null
                        )
                    ))}

                    {/* Login/Signup */}
                    <Route path='/login' element={<LoginSignup />} />
                    <Route path='/createaccount' element={<LoginSignup />} />

                    {/* Card Component */}
                    <Route path='/card' element={<Card />} />

                    {/* Item Details */}
                    <Route path='/item-detail/:id' element={<ItemDetail />} />

                    {/* Display Page Fallback */}
                    <Route path='/display' element={<DisplayPage />} />

                    {/* Cart Page */}
                    <Route path='/cart' element={<Cart />} />
                    
                    {/* Tracking */}
                    <Route path='/tracking' element={<Tracking/>}/>
                    <Route path='/order-confirmation' element={<OrderConfirm/>}/>
                </Routes>

                {/* Scroll to Top Button */}
                <ScrollButton />
            </BrowserRouter>
        </div>
    );
};

export default Main;
