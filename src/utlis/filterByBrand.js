
  export const filterByBrand = (products, brand) => {
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