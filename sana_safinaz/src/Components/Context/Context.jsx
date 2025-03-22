import React, { createContext, useEffect, useState } from 'react';

// Create Context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Load cart from local storage on initial render
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        try {
            const parsedCart = JSON.parse(savedCart);
            // Ensure cart is always an array
            return Array.isArray(parsedCart) ? parsedCart : [];
        } catch (error) {
            console.error('Error parsing cart from local storage:', error);
            return []; // Fallback to an empty array
        }
    });

    const [products, setProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const res = await fetch('http://localhost:4000/all-Accessories');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log('Error:', error);
            alert('Something went wrong');
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add product to cart
    const addToCart = (itemId, quantity = 1) => {
        const product = products.find((prd) => prd.id == itemId);
        if (!product) {
            console.error('Product not found');
            return;
        }

        setCart((prev) => {
            const existingItemIndex = prev.findIndex((item) => item.id === itemId);
            if (existingItemIndex !== -1) {
                // If the product already exists in the cart, update its quantity
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].quantity += quantity;
                return updatedCart;
            } else {
                // If the product is not in the cart, add it
                return [...prev, { ...product, quantity }];
            }
        });
    };

    // Remove item from cart
    const removeItem = (itemId) => {
        setCart((prev) => {
            const existingItemIndex = prev.findIndex((item) => item.id === itemId);
            if (existingItemIndex !== -1) {
                const updatedCart = [...prev];
                if (updatedCart[existingItemIndex].quantity > 1) {
                    // If quantity is more than 1, decrement the quantity
                    updatedCart[existingItemIndex].quantity -= 1;
                } else {
                    // If quantity is 1, remove the item from the cart
                    updatedCart.splice(existingItemIndex, 1);
                }
                return updatedCart;
            }
            return prev;
        });
    };

    // Get total cart amount
    const getTotalCartAmount = () => {
        return cart.reduce((total, item) => {
            return total + item.new_price * item.quantity;
        }, 0);
    };

    // Get total items in the cart
    const getTotalItem = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
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



