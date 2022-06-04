import { createContext, useContext, useReducer } from "react";
import { products } from "../data";

const productContext = createContext();

const initialState = {
  price: "",
  size: [],
  brand: "",
  category: "",
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...state, price: action.payload };

    case "LOW_TO_HIGH":
      return { ...state, price: action.payload };

    case "CLOTHS_SIZE":
      if (state.size.includes(action.payload)) {
        return {
          ...state,
          size: [...state.size].filter(
            (eachSize) => eachSize !== action.payload
          ),
        };
      } else {
        return { ...state, size: [...state.size, action.payload] };
      }

    case "SORT_BY_BRAND":
      return { ...state, brand: action.payload };

    case "SORT_BY_CATEGORY":
      return { ...state, category: action.payload };

      case "FILTER_CLEAR":  
      return {...state, price: "", brand: "", category: "", size: []}

    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const sortByPrice = (products, sortBy) => {
    let copied = [...products];

    if (sortBy === "HIGH_TO_LOW") {
      return copied.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "LOW_TO_HIGH") {
      return copied.sort((a, b) => a.price - b.price);
    }

    return copied;
  };

  const filterByPrice = sortByPrice(products, state.price);

  const uniqueSize = (products) => {
    const sizes = products.map((eachProduct) => eachProduct.size);
    return [...new Set(sizes)];
  };

  const getUniqueSizes = uniqueSize(products);

  const filterBySize = (products, size) => {
    let copied = [...products];

    if (size.length !== 0) {
      return copied.filter((eachProduct) => size.includes(eachProduct.size));
    } else {
      return copied;
    }
  };

  const getFilterBySize = filterBySize(filterByPrice, state.size);

  const filterByBrand = (products, brand) => {
    let copied = [...products];

    if (brand !== "") {
      return copied.filter(
        (eachProduct) =>
          eachProduct.brand?.toLowerCase() === brand?.toLowerCase()
      );
    } else {
      return copied;
    }
  };

  const getFilterByBrand = filterByBrand(getFilterBySize, state.brand);

  const filterByCategory = (products, category) => {
    let copied = [...products];

    if (category !== "") {
      return copied.filter(
        (eachProduct) =>
          eachProduct.category?.toLowerCase() === category?.toLowerCase()
      );
    } else {
      return copied;
    }
  };

  const getFilterByCategory = filterByCategory(
    getFilterByBrand,
    state.category
  );

 
  const filteredProducts = [...getFilterByCategory]

  return (
    <productContext.Provider
      value={{ products, state, dispatch, getUniqueSizes,  filteredProducts  }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => useContext(productContext);
