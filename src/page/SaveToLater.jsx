import React from "react";
import { useCartContext } from "../context/cartContext";


const SaveToLater = () => {

  const descriptionShort = (str) => {
    return str.split(" ").splice(0, 10).join(" ") + "...";
  };


  const {
    state: { later }, dispatch
  } = useCartContext();


  
  const addToCartHandler = (eachProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: eachProduct });
  };

  return (
    <div className="cart-container">
      {later.length === 0 ? (
        <h1>No product save to later</h1>
      ) : (
        <div className="cart-wrapper">
          {
            later.map((eachProduct) => <div className="images-card">
      <img className="card-img" src={eachProduct.image} alt="products" />

      <div className="card-content">
        <h4 className="card-title grey-text">
          {eachProduct.brand.toUpperCase()}
        </h4>
        <h4 className="card-title grey-text cloth-size">
          SIZE : {eachProduct.size.toUpperCase()}
        </h4>
        <h3 className="card-title ">{eachProduct.title}</h3>
        <h1 className="card-price">₹ {eachProduct.price}/-</h1>
        <p className="card-text">
          {descriptionShort(eachProduct.description).toLowerCase()}
        </p>
      </div>

      <div className="card-footer">
        <div className="move-cart-buttons">
          <button
            className="btn btn-secondary btn-move-cart"
            onClick={() => addToCartHandler(eachProduct)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>)
          }
        </div>
      )}
    </div>
  );
};

export { SaveToLater };
