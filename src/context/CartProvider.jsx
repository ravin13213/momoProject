import { createContext, useReducer } from "react";

export const CartContext = createContext();
const initialState = {
  cartItem: [],
};
const cartReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "AddToCart": {
      console.log(action.payload);

      const isExisting = state.cartItem.find((item) => {
        if (item.id == action.payload.id) {
          return item;
        }
      });

      if (isExisting) {
        return state;
      } else {
        const newProducts = [...state.cartItem, { ...action.payload, qty: 1 }];
        return { cartItem: newProducts };
        return state;
      }
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
