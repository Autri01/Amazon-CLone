import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, imgUrl, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
            dispatch({
                type : "REMOVE_FROM_BASKET",
                id : id,
            })
    }
  return (
    <div className="checkoutProuct">
      <img src={imgUrl} alt="" className="checkoutProuct_image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(Number(rating))
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="checkoutProduct_button" 
        onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
