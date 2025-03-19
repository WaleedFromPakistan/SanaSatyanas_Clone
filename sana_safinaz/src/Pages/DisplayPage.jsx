import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Item from '../Components/Item/Item';
import Product from '../assets/Product1.json';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Components/Context/Context';
import './CSS/Home.css';

const DisplayPage = (props) => {
    const location = useLocation();
    const path = location.pathname;
    const lastSegment = path.substring(path.lastIndexOf('/')+1);
    const { products } = useContext(ShopContext);

    // Find matching static product category
    const staticCategory = Product.find((product) => product.category === props.category);

    // Find matching dynamic product category
    //const dynamicCategory = products.find((product) => product.sub_category === props.category);

    return (
        <div>
            <Banner
               banner={staticCategory.back_ground_img}
               title={staticCategory.title}
               content={staticCategory.content}
            />
        <div className="HomePage-Products">
            {staticCategory.sub_categories.length === 0 ? (
                            <h4>No Products Available</h4>
                        ) : (
                            staticCategory.sub_categories.map((item, idx) => (
                                <Link
                                    key={`static-${idx}`}
                                    to={`/home/${staticCategory.category}/${item.category}`}
                                    style={{color:"black", textDecoration:"none"}}
                                >
                                    <Item
                                        image={item.image}
                                        title={item.title}
                                        category={staticCategory.category}
                                    />
                                </Link>
                            ))
                        )}
                    </div>
                </div>
                
    );
};

export default DisplayPage;
