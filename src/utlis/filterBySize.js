export const filterBySize = (products, size) => {
    let copied = [...products];

    if (size.length !== 0) {
      return copied.filter((eachProduct) => size.includes(eachProduct.size));
    } else {
      return copied;
    }
  };