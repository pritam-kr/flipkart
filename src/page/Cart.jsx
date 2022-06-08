import React from "react";
import { useCartContext } from "../context/cartContext";
import "./style.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();

  const descriptionShort = (str) => {
    return str.split(" ").splice(0, 10).join(" ") + "...";
  };

  const quantityDecreaseHandler = (productId) => {
    dispatch({ type: "QUANTITY_DECREASE", payload: productId });
  };

  const quantityIncreaseHandler = (productId) => {
    dispatch({ type: "QUANTITY_INCREASE", payload: productId });
  };

  const productRemoveHandler = (productId) => {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  };

  const totalQuantity = (product) => {
    return product.reduce((sum, current) => sum + current.quantity, 0);
  };

  const getTotalQuantity = totalQuantity(cart);

  const totalPrice = (product) => {
    return product.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0
    );
  };

  const getTotalPrice = totalPrice(cart);

  const discount = (price) => {
    return (price * 10) / 100;
  };

  const getDiscount = discount(getTotalPrice);

  const  saveLaterHandler = (product) => {
      dispatch({type: "SAVE_LATER", payload: product})
  }

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h1 className="center">No product in the Cart</h1>
      ) : (
        <>
          <div className="cart-wrapper">
            {cart?.map((eachProduct) => (
              <div className="images-card cart-card">
                <img
                  className="card-img"
                  src={eachProduct.image}
                  alt="products"
                />

                <div className="card-content">
                  <h4 className="card-title grey-text">
                    {eachProduct.brand.toUpperCase()}
                  </h4>
                  <h4 className="card-title grey-text cloth-size">
                    SIZE : {eachProduct.size.toUpperCase()}
                  </h4>
                  <h3 className="card-title ">{eachProduct.title}</h3>
                  <h1 className="card-price">₹ {eachProduct.price}/-</h1>

                  <div className="quantity-container">
                    <button
                      className="btn-quantity"
                      onClick={() => quantityDecreaseHandler(eachProduct.id)}
                    >
                      -
                    </button>{" "}
                    <span className="quantity">{eachProduct.quantity}</span>{" "}
                    <button
                      className="btn-quantity"
                      onClick={() => quantityIncreaseHandler(eachProduct.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="card-text">
                    {descriptionShort(eachProduct.description).toLowerCase()}
                  </p>
                </div>

                <div className="card-footer">
                  <div className="move-cart-buttons">
                    <button className="btn btn-secondary btn-move-cart" onClick={() => saveLaterHandler(eachProduct)}>
                      Save for Later
                    </button>
                  </div>
                </div>

                <button
                  className="btn-quantity btn-delete btn btn-secondary"
                  onClick={() => productRemoveHandler(eachProduct.id)}
                >
                  Remove
                </button>

                <span className="discount">{eachProduct.discount} % OFF</span>
              </div>
            ))}
          </div>

          <div className="price-calculation">
            <h1 className="text-md">Price Calculation</h1>

            <div>
              <ul className="price-calculation-list">
                <li className="lists text-md">
                  <span>Total Product: </span>
                  <span>{getTotalQuantity} </span>
                </li>

                <li className="lists text-md">
                  <span>Discount :</span>
                  <span>{getDiscount.toFixed(2)} INR</span>
                </li>

                <li className="lists text-md">
                  <span>
                    {" "}
                    <b>Total Price: </b>
                  </span>
                  <span>
                    <b>
                      {(getTotalPrice - getDiscount).toFixed(2)} INR{" "}
                    </b>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { Cart };
