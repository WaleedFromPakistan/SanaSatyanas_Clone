// import React, { createContext, useEffect, useState } from 'react';

// // Create Context
// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//     const [cart, setCart] = useState({});
//     const [products, setProducts] = useState([]);

//     const fetchInfo = async () => {
//         try {
//             const res = await fetch('http://localhost:4000/all-Accessories');
//             const data = await res.json();

//             setProducts(data);
//             initializeCart(data);
//         } catch (error) {
//             console.log('Error:', error);
//             alert('Something went wrong');
//         }
//     };

//     // Initialize cart
//     const initializeCart = (products) => {
//         let cart = {};
//         products.forEach((product) => {
//             cart[product.id] = 0;
//         });
//         setCart(cart);
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     // Add product to cart
//     const addToCart = (itemId) => {
//         setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     };

//     // Remove item from cart
//     const removeItem = (itemId) => {
//         setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     };

//     // Get total cart amount
//     const getTotalCartAmount = () => {
//         let total = 0;
//         for (const item in cart) {
//             if (cart[item] > 0) {
//                 const itemInfo = products.find((product) => product.id === Number(item));
//                 if (itemInfo) {
//                     total += itemInfo.new_price * cart[item];
//                 }
//             }
//         }
//         return total;
//     };

//     // Get total items in the cart
//     const getTotalItem = () => {
//         let total = 0;
//         for (const item in cart) {
//             if (cart[item] > 0) {
//                 total += cart[item];
//             }
//         }
//         return total;
//     };

//     const contextValue = {
//         cart,
//         products,
//         addToCart,
//         removeItem,
//         getTotalCartAmount,
//         getTotalItem,
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;



import React, { createContext, useEffect, useState } from 'react';

// Create Context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const res = await fetch('http://localhost:4000/all-Accessories');
            const data = await res.json();

            setProducts(data);
            initializeCart(data);
        } catch (error) {
            console.log('Error:', error);
            alert('Something went wrong');
        }
    };

    // Initialize cart
    const initializeCart = (products) => {
        let cart = {};
        products.forEach((product) => {
            cart[product.id] = { quantity: 0, details: product };
        });
        setCart(cart);
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    // Add product to cart
    const addToCart = (itemId, quantity = 1) => {
        setCart((prev) => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                quantity: prev[itemId].quantity + quantity
            }
        }));
    };

    // Remove item from cart
    const removeItem = (itemId) => {
        setCart((prev) => {
            if (prev[itemId].quantity > 1) {
                return {
                    ...prev,
                    [itemId]: { ...prev[itemId], quantity: prev[itemId].quantity - 1 }
                };
            } else {
                const updatedCart = { ...prev };
                delete updatedCart[itemId];
                return updatedCart;
            }
        });
    };

    // Get total cart amount
    const getTotalCartAmount = () => {
        return Object.values(cart).reduce((total, item) => {
            return total + item.details.new_price * item.quantity;
        }, 0);
    };

    // Get total items in the cart
    const getTotalItem = () => {
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    };

    const contextValue = {
        cart,
        products,
        addToCart,
        removeItem,
        getTotalCartAmount,
        getTotalItem,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

