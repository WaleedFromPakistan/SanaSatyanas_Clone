// import React from 'react';
// import './CSS/Cart.css';
// function Cart() {
//     return (
//         <div className='cart'>
//             <h1>Your Bag</h1>
//             <div className="cart-main">
//                 <div className="cart-left">
//                     <div className="cart-left-cart-items">
//                         <div className='cart-left-cart-item-box'>
//                             <div className='cart-left-cart-item-box-left'>
//                                 <div className="cart-left-cart-item-image">
//                                     <img src='https://www.sanasafinaz.com/media/catalog/product/s/s/ss24sge254_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=172&width=120&canvas=120:172&dpr=2'
//                                         alt=''
//                                     />
//                                 </div>
//                                 <div className='cart-left-cart-item-info'>
//                                     <div className="cart-left-cart-item-title">
//                                         <h3>SS24DSGE254</h3>
//                                     </div>
//                                     <div className='cart-left-cart-item-size'>
//                                         <h3>Free Size</h3>
//                                     </div>
//                                     <div className='cart-left-cart-item-price'>
//                                         <h3>Rs.4000</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='cart-left-cart-item-box-right'>
//                                 <div className='cart-left-cart-item-CRUD'>
//                                     <div className='cart-left-cart-item-quantity-minus'><button>-</button></div>
//                                     <div className='cart-left-cart-item-quantity'>1</div>
//                                     <div className='cart-left-cart-item-quantity-plus'><button>+</button></div>
//                                 </div>
//                                 <div className='cart-left-cart-item-delete'>
//                                     <div className='cart-left-cart-item-delete-btn'>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//                                             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
//                                             <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     <hr/>
//                     </div>
//                 </div>
//                 <div className="cart-right">
//                     <div className="cart-right-discount">
//                         <h2>APPLY DISCOUNT CODE</h2>
//                         <div className='cart-right-discount-input'>
//                             <input type='text' placeholder='Enter discount code' />
//                             <button>Apply</button>
//                         </div>

//                     </div>
//                     <hr/>
//                     <div className='cart-right-order-summary'>
//                         <h2>Order Summary</h2>
//                         <div className='cart-right-subtotal'>
//                             <h3>Sub total:</h3>
//                             <h3>Rs.4000</h3>
//                         </div>
//                         <hr/>
//                         <div className='cart-right-total'>
//                             <h3>OrderTotal:</h3>
//                             <h3>Rs.4000</h3>
//                         </div>
//                     </div>
//                     <div className='cart-right-checkout-btn'>
//                         <button>PROCEED TO CHECKOUT</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;




import React, { useContext } from 'react';
import './CSS/Cart.css';
import { ShopContext } from '../Components/Context/Context';

function Cart() {
    const { cart, removeItem, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart'>
            <h1>Your Bag</h1>
            <div className="cart-main">
                <div className="cart-left">
                    {Object.keys(cart).length === 0 ? (
                        <h2>Your cart is empty</h2>
                    ) : (
                        Object.values(cart).map(({ details, quantity }) => (
                            <div className='cart-left-cart-item-box' key={details.id}>
                                <div className='cart-left-cart-item-box-left'>
                                    <div className="cart-left-cart-item-image">
                                        <img src={details.img_main} alt='' />
                                    </div>
                                    <div className='cart-left-cart-item-info'>
                                        <h3>{details.name}</h3>
                                        <h3>PKR {details.new_price}</h3>
                                    </div>
                                </div>
                                <div className='cart-left-cart-item-box-right'>
                                    <div className='cart-left-cart-item-CRUD'>
                                        <button onClick={() => removeItem(details.id)}>-</button>
                                        <div className='cart-left-cart-item-quantity'>{quantity}</div>
                                        <button onClick={() => addToCart(details.id, 1)}>+</button>
                                    </div>
                                    <div className='cart-left-cart-item-delete'>
                                        <button onClick={() => removeItem(details.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-right">
                    <div className="cart-right-discount">
                        <h2>APPLY DISCOUNT CODE</h2>
                        <div className='cart-right-discount-input'>
                            <input type='text' placeholder='Enter discount code' />
                            <button>Apply</button>
                        </div>
                    </div>
                    <hr />
                    <div className='cart-right-order-summary'>
                        <h2>Order Summary</h2>
                        <div className='cart-right-subtotal'>
                            <h3>Sub total:</h3>
                            <h3>PKR {getTotalCartAmount()}</h3>
                        </div>
                        <hr />
                        <div className='cart-right-total'>
                            <h3>OrderTotal:</h3>
                            <h3>PKR {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <div className='cart-right-checkout-btn'>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
