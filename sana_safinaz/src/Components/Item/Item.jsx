import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
//import Product from '../../assets/Product.json'
const Item = (props) => {
  return (
    <div className='Item'>
      <div className='Item-image'>
         <img src={props.image} alt='' />{/*<Link to={`/home/${props.category}/${props.sub_categories ? props.sub_categories : ''}`}></Link> */}
      </div>
      <div className='Item-title'>
        <p>{props.title}</p>
      </div>

    </div>

  );      
} 

export default Item;
