import React, { useState } from 'react';
import './App.css';
import { ProductsList } from './components/products-list/products-list';
import { CartProductItem } from './interfaces/cart-product-item.interface';
import { CartContext } from './services/cart-state';

function App() {
  const [state, setState] = useState<CartProductItem[]>([]);

  return (
    <CartContext.Provider value={{cartItems: state, setCartItems:setState}}>
      <ProductsList/>
    </CartContext.Provider>
  );
}

export default App;
