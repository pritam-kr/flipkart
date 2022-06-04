export const uniqueSize = (products) => {
    const sizes = products.map((eachProduct) => eachProduct.size);
    return [...new Set(sizes)];
  };