/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://thumbs.dreamstime.com/b/horizontal-ad-banner-ready-web-sites-press-as-discount-advertisement-flyer-contains-black-friday-sale-black-friday-sale-103627128.jpg"
          alt=""
          className="checkout_ad"
        />
        <div className="checkout_title">
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
