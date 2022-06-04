export const filterByCategory = (products, category) => {
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