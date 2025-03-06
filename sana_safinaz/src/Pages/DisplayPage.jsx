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
    const dynamicCategory = products.find((product) => product.sub_category === props.category);

    return (
        <div>
            {staticCategory ? (
                // Handle Static Content
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
            ) : dynamicCategory ? (
                // Handle Dynamic Content
                <div>
                    {products
                    .filter((prd)=> prd.Category === dynamicCategory.Category && lastSegment === dynamicCategory.sub_category)
                    .map((prd , index)=>(
                        <Banner
                        banner={prd.img_main}
                        title={`Explore ${dynamicCategory.Category}`}
                        content={`Browse through the latest ${dynamicCategory.Category} products`}
                    />
                    ))}
                    
                    {products
                        .filter((prd) => prd.Category === dynamicCategory.Category)
                        .map((prd, idx) => (
                            <>

                                <div className="HomePage-Products">

                                    <Link
                                        key={`dynamic-${idx}`}
                                        to={`/item-detail/:id${prd.id}`}
                                    >
                                        <Item
                                            image={prd.img1} // Replace with actual dynamic image if available
                                            title={prd.sub_category}
                                            category={prd.Category}
                                        />
                                    </Link>


                                </div>
                            </>
                        ))}
                </div>
            ) : (
                // Fallback if no category is found
                <h4>Category Not Found</h4>
            )}
        </div>
    );
};

export default DisplayPage;
