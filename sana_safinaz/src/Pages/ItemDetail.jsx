// import React, { useState, useEffect, useContext } from 'react';
// import './CSS/ItemDetail.css';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../Components/Context/Context';

// const ItemDetail = () => {
//   const { products } = useContext(ShopContext);
//   const { id } = useParams(); // Extract id correctly
//   const [count, setCount] = useState(1);
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     const selectedProduct = products.find(prd => prd.id == id);
//     if (selectedProduct) {
//       setImage(selectedProduct.img_main);
//     }
//   }, [id, products]);

//   return (
//     <div>
//       {products
//         .filter(prd => prd.id == id)
//         .map((prd) => (
//           <div className='item-detail' key={prd.id}>
//             <div className="product-images">
//               <img onMouseOver={() => setImage(prd.img1)} src={prd.img1} alt="" />
//               <img onMouseOver={() => setImage(prd.img2)} src={prd.img2} alt="" />
//               <img onMouseOver={() => setImage(prd.img3)} src={prd.img3} alt="" />
//             </div>

//             <div className="product-logo">
//               <div className="Discount"><strong>{prd.discount}% off</strong></div>
//               <img src={image} alt="Main Product" />
//             </div>

//              <div className="product-detail">
//               <div className="product-detail-0">
//                 <h3>{prd.name}</h3>
//                 <p>Availability: In Stock</p>
//               </div>
              

//               <div className="product-detail-1">
//                 <p className='id-1'>SKU#: {prd.sku}</p>
//                 <p className='id-2'><i className="fa-regular fa-heart"></i> Add To Wish List</p>
//               </div>

//               <div className="product-detail-2">
//                 <p><strong>Description:</strong> {prd.description}</p>
//                 <p><strong>Color:</strong> {prd.color}</p>
//                 <p><strong>Fabric:</strong> {prd.fabric}</p>
//                 <p><strong>Cut:</strong> {prd.cut}</p>
//               </div>

//               <div className='product-detail-3'>
//                 <span className='id-3'><strong>PKR {prd.price}</strong></span>
//                 <span className='id-4'>PKR {prd.originalPrice}</span>
//               </div>

//               <div className="product-detail-6">
//                 <strong>Select Size</strong>
//                 <div className="size_container">
//                   {/* {prd.sizes.map(size => (
//                     <div key={size}>{size}</div>
//                   ))} */}
//                 </div>
//               </div>

//               <div className="product-detail-7">
//                 <div className="add-minus">
//                   <div className="minus" onClick={() => setCount(prev => Math.max(1, prev - 1))}>
//                     <p>-</p>
//                   </div>
//                   <div className="count">
//                     <p>{count}</p>
//                   </div>
//                   <div className="plus" onClick={() => setCount(prev => prev + 1)}>
//                     <p>+</p>
//                   </div>
//                 </div>
//                 <div className="add-button">
//                   <h5>ADD TO BAG</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ItemDetail;


import React, { useState, useEffect, useContext } from 'react';
import './CSS/ItemDetail.css';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Components/Context/Context';

const ItemDetail = () => {
  const { products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [image, setImage] = useState("");

  useEffect(() => {
    const selectedProduct = products.find(prd => prd.id == id);
    if (selectedProduct) {
      setImage(selectedProduct.img_main);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    addToCart(id, count);
  };

  return (
    <div>
      {products
        .filter(prd => prd.id == id)
        .map((prd) => (
          <div className='item-detail' key={prd.id}>
            <div className="product-images">
              <img onMouseOver={() => setImage(prd.img1)} src={prd.img1} alt="" />
              <img onMouseOver={() => setImage(prd.img2)} src={prd.img2} alt="" />
              <img onMouseOver={() => setImage(prd.img3)} src={prd.img3} alt="" />
            </div>

            <div className="product-logo">
              <div className="Discount"><strong>{prd.discount}% off</strong></div>
              <img src={image} alt="Main Product" />
            </div>

            <div className="product-detail">
              <div className="product-detail-0">
                <h3>{prd.name}</h3>
                <p>Availability: In Stock</p>
              </div>

              <div className="product-detail-1">
                <p className='id-1'>SKU#: {prd.sku}</p>
                <p className='id-2'><i className="fa-regular fa-heart"></i> Add To Wish List</p>
              </div>

              <div className="product-detail-2">
                <p><strong>Description:</strong> {prd.description}</p>
                <p><strong>Color:</strong> {prd.color}</p>
                <p><strong>Fabric:</strong> {prd.fabric}</p>
                <p><strong>Cut:</strong> {prd.cut}</p>
              </div>

              <div className='product-detail-3'>
                <span className='id-3'><strong>PKR {prd.price}</strong></span>
                <span className='id-4'>PKR {prd.originalPrice}</span>
              </div>

              <div className="product-detail-7">
                <div className="add-minus">
                  <div className="minus" onClick={() => setCount(prev => Math.max(1, prev - 1))}>
                    <p>-</p>
                  </div>
                  <div className="count">
                    <p>{count}</p>
                  </div>
                  <div className="plus" onClick={() => setCount(prev => prev + 1)}>
                    <p>+</p>
                  </div>
                </div>
                <div className="add-button" onClick={handleAddToCart}>
                  <h5>ADD TO BAG</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemDetail;

