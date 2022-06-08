import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";

const cartContext = createContext();

const initialState = {
  loading: false,
  error: "",
  cart: [],
  later: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
       
      if (state.cart.find((products) => products.id === action.payload.id)) {
         
        return {
          ...state,
          cart: [...state.cart].map((eachProduct) =>
            eachProduct.id === action.payload.id
              ? { ...eachProduct, quantity: eachProduct.quantity + 1 }
              : eachProduct
          ),
        };
      } else {
       
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "QUANTITY_INCREASE":
      const isProduct = state.cart.map((eachProduct) =>
        eachProduct.id === action.payload
          ? { ...eachProduct, quantity: eachProduct.quantity + 1 }
          : eachProduct
      );
     
      return { ...state, cart: [...isProduct] };

    case "QUANTITY_DECREASE":
      const findProduct = state.cart.find(
        (product) => product.id === action.payload
      );

      if (findProduct.quantity <= 1) {
        const isProduct = state.cart.map((eachProduct) =>
          eachProduct.id === action.payload
            ? { ...eachProduct, quantity: 1 }
            : eachProduct
        );

        return { ...state, cart: [...isProduct] };
      } else {
        const isProduct = state.cart.map((eachProduct) =>
          eachProduct.id === action.payload
            ? { ...eachProduct, quantity: eachProduct.quantity - 1 }
            : eachProduct
        );
      

        return { ...state, cart: [...isProduct] };
      }

    case "DELETE_PRODUCT":
      if (state.cart.find((product) => product.id === action.payload)) {
      
        return {
          ...state,
          cart: [...state.cart].filter(
            (product) => product.id !== action.payload
          ),
        };
      }

      break;

    case "SAVE_LATER":
      
      return { ...state, later: [...state.later, action.payload] };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => useContext(cartContext);
