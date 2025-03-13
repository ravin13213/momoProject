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
          alert ("This product is already in cart")
          return item;
        }
      });

      if (isExisting) {
        return state;
      } else {
        const newProducts = [...state.cartItem, { ...action.payload, qty: 1 }];
        alert(action.payload.name);
        return { cartItem: newProducts };
      }
    }

    case "Increment": {
      const newCartItem = state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        cartItem: newCartItem,
      };
    }

    case "Decrement": {
      const newCartItem = state.cartItem.map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        cartItem: newCartItem,
      };
    }
    case "RemovalFromCart": {
      const filteredItems = state.cartItem.filter((item) => {
        return item.id != action.payload.id;
      });
      return state;
    }
    case "ClearCart": {
      return {
        cartItem: [],
      };
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
      {/* Benefit: Makes UI dynamic without modifying parent components. */}
    </CartContext.Provider>
  );
};
