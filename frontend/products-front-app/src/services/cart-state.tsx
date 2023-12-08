import React from "react"
import { CartProductItem } from "../interfaces/cart-product-item.interface"

export interface CartState {
    cartItems: CartProductItem[],
    setCartItems: React.Dispatch<React.SetStateAction<CartProductItem[]>>
};

export const CartContext = React.createContext<CartState>({
    cartItems: [],
    setCartItems: () => {},
  })