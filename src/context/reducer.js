export const productsReducer = (state, action) => {
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
  