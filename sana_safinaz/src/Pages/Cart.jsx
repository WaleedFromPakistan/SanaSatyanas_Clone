// import React, { useContext, useState } from 'react';
// import './CSS/Cart.css';
// import { ShopContext } from '../Components/Context/Context';

// function Cart() {
//     const { cart, removeItem, getTotalCartAmount, addToCart , clearCart } = useContext(ShopContext);
//     const [order, setOrder] = useState({
//         user_id: 'TBD',
//         date: '',
//         total: getTotalCartAmount(),
//         status: "Pending",
//         item: [cart]
//     })

//     const addOrder = async () => {
//         try {
//             const reponse = await fetch('http://localhost:4000/checkout', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(order)
//             });
//             const order_data = await reponse.json();
//             if (order_data.success) {
//                 alert('new order recieved');
//                 setOrder({
//                     id: 0,
//                     user_id: '',
//                     date: '',
//                     total: 0,
//                     status: '',
//                     item: []
//                 })
//             }
//             else {
//                 alert('error');
//             }
//         }
//         catch (error) {
//             alert('Something went wrong');
//         }
//     }
//     const handleCheckout = (e) => {
//         e.preventDefault();
//         console.log(order);
//         addOrder();
//         clearCart()
        
//     }

//     return (
//         <div className='cart'>
//             <h1>Your Bag</h1>
//             <div className="cart-main">
//                 <div className="cart-left">
//                     {cart.length === 0 ? (
//                         <h2>Your cart is empty</h2>
//                     ) : (
//                         cart.map((item) => (
//                             <div className='cart-left-cart-item-box' key={item.id}>
//                                 <div className='cart-left-cart-item-box-left'>
//                                     <div className="cart-left-cart-item-image">
//                                         <img src={item.img_main} alt='' />
//                                     </div>
//                                     <div className='cart-left-cart-item-info'>
//                                         <h3>{item.name}</h3>
//                                         <h3>PKR {item.new_price}</h3>
//                                     </div>
//                                 </div>
//                                 <div className='cart-left-cart-item-box-right'>
//                                     <div className='cart-left-cart-item-CRUD'>
//                                         <button onClick={() => removeItem(item.id)}>-</button>
//                                         <div className='cart-left-cart-item-quantity'>{item.quantity}</div>
//                                         <button onClick={() => addToCart(item.id, 1)}>+</button>
//                                     </div>
//                                     <div className='cart-left-cart-item-delete'>
//                                         <button onClick={() => removeItem(item.id)}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
//                                                 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
//                                                 <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//                 <div className="cart-right">
//                     <div className="cart-right-discount">
//                         <h2>APPLY DISCOUNT CODE</h2>
//                         <div className='cart-right-discount-input'>
//                             <input type='text' placeholder='Enter discount code' />
//                             <button>Apply</button>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className='cart-right-order-summary'>
//                         <h2>Order Summary</h2>
//                         <div className='cart-right-subtotal'>
//                             <h3>Sub total:</h3>
//                             <h3>PKR {getTotalCartAmount()}</h3>
//                         </div>
//                         <hr />
//                         <div className='cart-right-total'>
//                             <h3>OrderTotal:</h3>
//                             <h3>PKR {getTotalCartAmount()}</h3>
//                         </div>
//                     </div>
//                     <div className='cart-right-checkout-btn'>
//                         <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;



import React, { useContext, useState } from 'react';
import './CSS/Cart.css';
import { ShopContext } from '../Components/Context/Context';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { 
        user, 
        cart, 
        removeItem, 
        getTotalCartAmount, 
        addToCart, 
        clearCart 
    } = useContext(ShopContext);
    const [order, setOrder] = useState({
        user_id: user?.uid || 'TBD',
        date: new Date().toISOString(),
        total: getTotalCartAmount(),
        status: "Pending",
        items: [...cart]
    });
    const [checkoutError, setCheckoutError] = useState(null);
    const navigate = useNavigate();

    const addOrder = async () => {
        try {
            const response = await fetch('http://localhost:4000/checkout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...order,
                    user_id: user.uid
                })
            });
            const order_data = await response.json();
            if (order_data.success) {
                alert('New order received');
                clearCart();
                navigate('/order-confirmation');
            } else {
                setCheckoutError('Failed to process order. Please try again.');
            }
        } catch (error) {
            setCheckoutError('Something went wrong. Please try again later.');
            console.error('Checkout error:', error);
        }
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        setCheckoutError(null);

        if (!user) {
            navigate('/login', { 
                state: { 
                    from: '/cart',
                    message: 'Please login to complete your purchase'
                } 
            });
            return;
        }

        // Update order with current cart data
        setOrder(prev => ({
            ...prev,
            user_id: user.uid,
            total: getTotalCartAmount(),
            items: [...cart]
        }));

        addOrder();
    };

    return (
        <div className='cart'>
            <h1>Your Bag</h1>
            {checkoutError && (
                <div className="cart-error-message">
                    {checkoutError}
                </div>
            )}
            <div className="cart-main">
                <div className="cart-left">
                    {cart.length === 0 ? (
                        <h2>Your cart is empty</h2>
                    ) : (
                        cart.map((item) => (
                            <div className='cart-left-cart-item-box' key={item.id}>
                                <div className='cart-left-cart-item-box-left'>
                                    <div className="cart-left-cart-item-image">
                                        <img src={item.img_main} alt={item.name} />
                                    </div>
                                    <div className='cart-left-cart-item-info'>
                                        <h3>{item.name}</h3>
                                        <h3>PKR {item.new_price}</h3>
                                    </div>
                                </div>
                                <div className='cart-left-cart-item-box-right'>
                                    <div className='cart-left-cart-item-CRUD'>
                                        <button onClick={() => removeItem(item.id)}>-</button>
                                        <div className='cart-left-cart-item-quantity'>{item.quantity}</div>
                                        <button onClick={() => addToCart(item.id, 1)}>+</button>
                                    </div>
                                    <div className='cart-left-cart-item-delete'>
                                        <button onClick={() => removeItem(item.id)}>
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
                            <h3>Order Total:</h3>
                            <h3>PKR {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <div className='cart-right-checkout-btn'>
                        <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;