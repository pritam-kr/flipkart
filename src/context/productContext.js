import { createContext, useContext, useReducer } from "react";
import { products } from "../data";
import {
  sortByPrice,
  uniqueSize,
  filterBySize,
  filterByBrand,
  filterByCategory,
} from "../utlis";
import { productsReducer } from "./reducer";

const productContext = createContext();

const initialState = {
  price: "",
  size: [],
  brand: "",
  category: "",
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const filterByPrice = sortByPrice(products, state.price);

  const getUniqueSizes = uniqueSize(products);

  const getFilterBySize = filterBySize(filterByPrice, state.size);

  const getFilterByBrand = filterByBrand(getFilterBySize, state.brand);

  const getFilterByCategory = filterByCategory(
    getFilterByBrand,
    state.category
  );

  const filteredProducts = [...getFilterByCategory];

  return (
    <productContext.Provider
      value={{ products, state, dispatch, getUniqueSizes, filteredProducts }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => useContext(productContext);
