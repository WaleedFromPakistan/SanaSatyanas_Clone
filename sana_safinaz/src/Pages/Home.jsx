import React from 'react';
import Banner from '../Components/Banner/Banner';
import Item from '../Components/Item/Item';
import Product from '../assets/Product1.json';
import { Link } from 'react-router-dom';
import './CSS/Home.css';

const Home = (props) => {
    return (
        <div>
            <Banner banner={props.banner} title='Home'/>
            <div className='HomePage-Products'>
                {
                    Product.map((item, index) => {
                        return (
                            <Link to={`/home/${item.category}/`} style={{color:"black", textDecoration:"none"}}> 
                            <Item 
                                key={index}
                                image={item.image} 
                                title={item.title} 
                                category={item.category} 
                            />
                            </Link> 
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
