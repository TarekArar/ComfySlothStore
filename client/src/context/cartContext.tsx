import React, { useState } from "react";
import { Product } from "../components/products/types";

interface props {
  children: React.Element;
}

interface CartItem extends Product {
  count: number;
}

type CartItems = Array<CartItem>;

// interface Action {
//   type: string;
//   payload: any;
// }
//
const CartContext = React.createContext();

// function cartReducer(state: CartItems | null, action: Action) {
//   switch (action.type) {
//     case "ADD_ITEM_TO_CART": {
//       return state?.push(action.payload);
//     }
//     // case "decrement": {
//     //   return { count: state.count - 1 };
//     // }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// const addToCard = (state, product) => {
//   state.push(product);
// };

const CartContextProvider = ({ children }: props) => {
  const [cartItems, setCartItems] = useState<CartItems>([]);
  // const [state, dispatch] = React.useReducer<CartItems, Function>(cartReducer, { cartItems: [] });
  // // NOTE: you *might* need to memoize this value
  // // Learn more in http://kcd.im/optimize-context
  // const value = { state, dispatch };

  const addProductToCard = (product: Product, count: number = 1) => {
    const newItem = { ...product, count };
    const tempCartItems = [...cartItems, newItem];
    setCartItems(tempCartItems);
  };

  const incrementCount = (id: number) => {
    const newCartitems = cartItems.map((item: CartItem) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(newCartitems);
  };
  const decrementCount = (id: number) => {
    const newCartitems = cartItems.map((item: CartItem) =>
      item.id === id && item.count !== 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCartItems(newCartitems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProductToCard, incrementCount, decrementCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CountProvider");
  }
  return context;
};

export { CartContextProvider, useCart };
