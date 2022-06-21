/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, imgUrl, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        imgUrl: imgUrl,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(Number(rating))
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <img className="product_image" src={imgUrl} />
      </div>
      <button className="product_button" onClick={addTobasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
