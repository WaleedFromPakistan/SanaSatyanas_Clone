// import React, { useState, useEffect, useContext } from 'react';
// import './CSS/ItemDetail.css';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
// import { ShopContext } from '../Components/Context/Context';

// const ItemDetail = () => {
//   const { products, addToCart } = useContext(ShopContext);
//   const { id } = useParams();
//   const [count, setCount] = useState(1);
//   const [image, setImage] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     const selectedProduct = products.find(prd => prd.id == id);
//     if (selectedProduct) {
//       setImage(selectedProduct.img_main);
//     }
//   }, [id, products]);

//   const handleAddToCart = () => {
//     addToCart(id, count); // Add product to cart
//     navigate('/cart'); // Redirect to cart page
//   };

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
//               <img onMouseOver={() => setImage(prd.img4)} src={prd.img4} alt="" />
//               <img onMouseOver={() => setImage(prd.img5)} src={prd.img5} alt="" />
//             </div>

//             <div className="product-logo">
//               <div className="Discount"><strong>{prd.discount}% off</strong></div>
//               <img src={image} alt="Main Product" />
//             </div>

//             <div className="product-detail">
//               <div className="product-detail-0">
//                 <h2>{prd.name}</h2>
//                 <p>Availability:<span style={{ color: prd.available === 'Available' ? "green" : "red" }}> {prd.available === 'Available' ? "In Stock" : "Out of Stock"}</span></p>
//               </div>

//               <div className="product-detail-1">
//                 <p className='id-1'>SKU#: {prd.title}</p>
//                 <p className='id-2'><i className="fa-regular fa-heart"></i> Add To Wish List</p>
//               </div>

//               <div className="product-detail-2">
//                 <p><strong>Description:</strong> {prd.description}</p>
//                 <p><strong>Material:</strong> {prd.material}</p>
//               </div>

//               <div className='product-detail-3'>
//                 <span className='id-3'>Price: PKR {prd.new_price}</span>
//                 <span className='id-4'>PKR {prd.old_price}</span>
//               </div>

//               <div className='product-detail-4'>
//                 <div className='delivery_note'>
//                   <h3>Delivery Note</h3>
//                   <p>{prd.delivery_note}</p>
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
//                 <div className="add-button" onClick={handleAddToCart}>
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
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Components/Context/Context';

const ItemDetail = () => {
  const { user, products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(prd => prd.id == id);
    if (selectedProduct) {
      setImage(selectedProduct.img_main);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    setAuthError(null); // Reset any previous errors
    
    if (!user) {
      // Redirect to login with return URL
      navigate('/login', { 
        state: { 
          from: `/product/${id}`,
          message: 'Please login to add items to your cart'
        } 
      });
      return;
    }

    try {
      addToCart(id, count);
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      setAuthError('Failed to add item to cart. Please try again.');
    }
  };

  return (
    <div>
      {products
        .filter(prd => prd.id == id)
        .map((prd) => (
          <div className='item-detail' key={prd.id}>
            {authError && (
              <div className="auth-error-message">
                {authError}
              </div>
            )}

            <div className="product-images">
              <img onMouseOver={() => setImage(prd.img1)} src={prd.img1} alt="" />
              <img onMouseOver={() => setImage(prd.img2)} src={prd.img2} alt="" />
              <img onMouseOver={() => setImage(prd.img3)} src={prd.img3} alt="" />
              <img onMouseOver={() => setImage(prd.img4)} src={prd.img4} alt="" />
              <img onMouseOver={() => setImage(prd.img5)} src={prd.img5} alt="" />
            </div>

            <div className="product-logo">
              <div className="Discount"><strong>{prd.discount}% off</strong></div>
              <img src={image} alt="Main Product" />
            </div>

            <div className="product-detail">
              <div className="product-detail-0">
                <h2>{prd.name}</h2>
                <p>Availability:<span style={{ color: prd.available === 'Available' ? "green" : "red" }}> {prd.available === 'Available' ? "In Stock" : "Out of Stock"}</span></p>
              </div>

              <div className="product-detail-1">
                <p className='id-1'>SKU#: {prd.title}</p>
                <p className='id-2'><i className="fa-regular fa-heart"></i> Add To Wish List</p>
              </div>

              <div className="product-detail-2">
                <p><strong>Description:</strong> {prd.description}</p>
                <p><strong>Material:</strong> {prd.material}</p>
              </div>

              <div className='product-detail-3'>
                <span className='id-3'>Price: PKR {prd.new_price}</span>
                <span className='id-4'>PKR {prd.old_price}</span>
              </div>

              <div className='product-detail-4'>
                <div className='delivery_note'>
                  <h3>Delivery Note</h3>
                  <p>{prd.delivery_note}</p>
                </div>
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

