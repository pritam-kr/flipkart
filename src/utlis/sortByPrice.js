export const sortByPrice = (products, sortBy) => {
    let copied = [...products];

    if (sortBy === "HIGH_TO_LOW") {
      return copied.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "LOW_TO_HIGH") {
      return copied.sort((a, b) => a.price - b.price);
    }

    return copied;
  };
