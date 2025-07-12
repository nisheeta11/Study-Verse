
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
  setCartItems(prev => {
    const exists = prev.find(item => item.id === course.id);
    if (exists) {
      return prev.map(item =>
        item.id === course.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prev, { ...course, quantity: 1 }];
  });
};




  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
  const price = parseFloat(item.price);
  const quantity = item.quantity || 1;
  return total + (isNaN(price) ? 0 : price * quantity);
}, 0);





  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};


