
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course) => {
  console.log("Course being added to cart:", course);
  setCartItems(prev => {
    const exists = prev.find(item => item.id === course.id);
    if (exists) return prev;
    return [...prev, { ...course }];
  });
};


  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
  const price = parseFloat(item.price);
  return total + (isNaN(price) ? 0 : price);
}, 0);


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};


