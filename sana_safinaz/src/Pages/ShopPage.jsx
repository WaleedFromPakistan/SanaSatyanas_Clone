import React, { useContext } from 'react';
import Item from '../Components/Item/Item';
import './CSS/Home.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Components/Context/Context';

const ShopPage = (props) => {
    const { products } = useContext(ShopContext); // Accessing products from context

    return (
        <div className="shop-page">
            {products
                .filter(
                    (prd) =>
                        prd.Category === props.products.category)
                .map((filteredProduct, index) => (
                    <Link to={'/item-detail/:id'}>
                        <Item
                            key={index} // Adding key for React's list rendering
                            image={filteredProduct.img_main}
                            title={filteredProduct.title}
                            category={filteredProduct.category}
                            sub_category={filteredProduct.sub_category}
                        />
                    </Link>
                ))}
        </div>
    );
};

export default ShopPage;
