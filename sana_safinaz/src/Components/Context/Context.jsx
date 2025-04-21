// import React, { createContext, useEffect, useState } from 'react';

// // Create Context
// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//     // Load cart from local storage on initial render
//     const [cart, setCart] = useState(() => {
//         const savedCart = localStorage.getItem('cart');
//         try {
//             const parsedCart = JSON.parse(savedCart);
//             // Ensure cart is always an array
//             return Array.isArray(parsedCart) ? parsedCart : [];
//         } catch (error) {
//             console.error('Error parsing cart from local storage:', error);
//             return []; // Fallback to an empty array
//         }
//     });

//     const [products, setProducts] = useState([]);

//     const fetchInfo = async () => {
//         try {
//             const res = await fetch('http://localhost:4000/all-Accessories');
//             const data = await res.json();
//             setProducts(data);
//         } catch (error) {
//             console.log('Error:', error);
//             alert('Something went wrong');
//         }
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     // Save cart to local storage whenever it changes
//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     // Add product to cart
//     const addToCart = (itemId, quantity = 1) => {
//         const product = products.find((prd) => prd.id == itemId);
//         if (!product) {
//             console.error('Product not found');
//             return;
//         }

//         setCart((prev) => {
//             const existingItemIndex = prev.findIndex((item) => item.id === itemId);
//             if (existingItemIndex !== -1) {
//                 // If the product already exists in the cart, update its quantity
//                 const updatedCart = [...prev];
//                 updatedCart[existingItemIndex].quantity += quantity;
//                 return updatedCart;
//             } else {
//                 // If the product is not in the cart, add it
//                 return [...prev, { ...product, quantity }];
//             }
//         });
//     };

//     // Remove item from cart
//     const removeItem = (itemId) => {
//         setCart((prev) => {
//             const existingItemIndex = prev.findIndex((item) => item.id === itemId);
//             if (existingItemIndex !== -1) {
//                 const updatedCart = [...prev];
//                 if (updatedCart[existingItemIndex].quantity > 1) {
//                     // If quantity is more than 1, decrement the quantity
//                     updatedCart[existingItemIndex].quantity -= 1;
//                 } else {
//                     // If quantity is 1, remove the item from the cart
//                     updatedCart.splice(existingItemIndex, 1);
//                 }
//                 return updatedCart;
//             }
//             return prev;
//         });
//     };

//     // Get total cart amount
//     const getTotalCartAmount = () => {
//         return cart.reduce((total, item) => {
//             return total + item.new_price * item.quantity;
//         }, 0);
//     };

//     // Get total items in the cart
//     const getTotalItem = () => {
//         return cart.reduce((total, item) => total + item.quantity, 0);
//     };

//     const clearCart = () => {
//         setCart([]);
//     };
    
//     const contextValue = {
//         cart,
//         products,
//         addToCart,
//         removeItem,
//         getTotalCartAmount,
//         getTotalItem,
//         clearCart
//     };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;


import React, { createContext, useEffect, useState } from 'react';
import { auth, db } from '../../../Firebase'; // Your Firebase config file
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Create Context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // State for user authentication and cart
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Check auth state on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                // User is signed in
                setUser(currentUser);
                // Load user's cart from Firestore
                await loadUserCart(currentUser.uid);
            } else {
                // User is signed out
                setUser(null);
                setCart([]);
            }
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Load products from your API
    const fetchInfo = async () => {
        try {
            const res = await fetch('http://localhost:4000/all-Accessories');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    // Load user's cart from Firestore
    const loadUserCart = async (userId) => {
        try {
            const cartRef = doc(db, 'carts', userId);
            const cartSnap = await getDoc(cartRef);
            
            if (cartSnap.exists()) {
                setCart(cartSnap.data().items || []);
            } else {
                // Initialize empty cart if no document exists
                await setDoc(cartRef, { items: [] });
                setCart([]);
            }
        } catch (error) {
            console.error('Error loading cart:', error);
        }
    };

    // Save cart to Firestore
    const saveCartToFirestore = async (userId, cartItems) => {
        try {
            const cartRef = doc(db, 'carts', userId);
            await setDoc(cartRef, { items: cartItems }, { merge: true });
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    };

    // Add product to cart (now requires authentication)
    const addToCart = (itemId, quantity = 1) => {
        if (!user) {
            throw new Error('User not authenticated');
        }

        const product = products.find((prd) => prd.id == itemId);
        if (!product) {
            console.error('Product not found');
            return;
        }

        setCart((prev) => {
            const existingItemIndex = prev.findIndex((item) => item.id === itemId);
            let updatedCart;

            if (existingItemIndex !== -1) {
                // Update quantity if product exists
                updatedCart = [...prev];
                updatedCart[existingItemIndex].quantity += quantity;
            } else {
                // Add new product to cart
                updatedCart = [...prev, { ...product, quantity }];
            }

            // Save to Firestore
            saveCartToFirestore(user.uid, updatedCart);
            return updatedCart;
        });
    };

    // Remove item from cart
    const removeItem = (itemId) => {
        if (!user) return;

        setCart((prev) => {
            const existingItemIndex = prev.findIndex((item) => item.id === itemId);
            if (existingItemIndex === -1) return prev;

            const updatedCart = [...prev];
            if (updatedCart[existingItemIndex].quantity > 1) {
                // Decrease quantity
                updatedCart[existingItemIndex].quantity -= 1;
            } else {
                // Remove item completely
                updatedCart.splice(existingItemIndex, 1);
            }

            // Save to Firestore
            saveCartToFirestore(user.uid, updatedCart);
            return updatedCart;
        });
    };

    // Get total cart amount
    const getTotalCartAmount = () => {
        return cart.reduce((total, item) => {
            return total + item.new_price * item.quantity;
        }, 0);
    };

    // Get total items in cart
    const getTotalItem = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Clear cart
    const clearCart = () => {
        if (!user) return;
        setCart([]);
        saveCartToFirestore(user.uid, []);
    };

    // Fetch products on component mount
    useEffect(() => {
        fetchInfo();
    }, []);

    // Context value containing all necessary data and functions
    const contextValue = {
        user,
        cart,
        products,
        loading,
        addToCart,
        removeItem,
        getTotalCartAmount,
        getTotalItem,
        clearCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {!loading && props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;


