/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate"
          price={19.99}
          rating={5}
          imgUrl="https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1"
        />
        <Product
          id={2}
          title={
            "Kenwood kMix Stand for Baking,Stylish Kitchen Mixer with K-beater, Dough,Hook and Whisk,5Liter Bowl"
          }
          price={239}
          rating={4}
          imgUrl={"https://m.media-amazon.com/images/I/716kTJI4jtL._SX425_.jpg"}
        />
      </div>
      <div className="home_row">
        <Product
          id={3}
          title="Samsung LC498G87563H Curved LED Gaming Monitor"
          imgUrl="https://m.media-amazon.com/images/I/71it2biogSS._SY355_.jpg"
          price="198.99"
          rating="5"
        />
        <Product
          id="4"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
          imgUrl="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX425_.jpg"
          price="98.99"
          rating="2"
        />
        <Product
          id="5"
          title="New Apple iPad Pro (12.9-inch, Wifi, 128GB) - Silver (4th generation)"
          imgUrl="https://m.media-amazon.com/images/I/61y9K3gDOqL._SX522_.jpg"
          price="598.99"
          rating="3"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Samsung LC498G87563H Curved LED Gaming Monito-Super Wide Dual WQHD 5120x1440"
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/51Z9RtTEELL._SY300_SX300_QL70_FMwebp_.jpg"
          price="109.99"
          rating="3"
        />
      </div>
      <div className="home_row">
        <Product
          id="7"
          title="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold"
          imgUrl="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX960_SY720_.jpg"
          price="399.99"
          rating="4"
        />
        <Product
          id="8"
          title="Sony WF-C500 Bluetooth Truly Wireless in Ear Earbuds with 20 Hrs Battery, True Wireless Earbuds with Mic for Phone Calls, Fast Pair"
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/310HvMDy4gL._SY300_SX300_QL70_FMwebp_.jpg"
          price="99"
          rating="3"
        />
        <Product
          id="9"
          title="Amazon Brand - Solimo Lunaria Fabric 4 Seater L Shape Sofa (Grey & Blue)"
          imgUrl="https://m.media-amazon.com/images/I/81NFbcqWE6L._SX425_.jpg"
          price="199.99"
          rating="5"
        />
      </div>
      <div className="home_row">
        <Product
          id="10"
          title="Acco & Deco Wall Shelves | Corner Hanging Shelf for Living Room | Zig Zag Home Decor Floating Display Rack Storage Organizer with Engineered Wood Finish Set of 5 Tiers (Brown Finish)"
          imgUrl="https://m.media-amazon.com/images/I/81GXf1PlysL._SY450_.jpg"
          price="98.5"
          rating="2"
        />
        <Product
          id="11"
          title="Lenovo Tab P11 (11 inch (27.94 cm), 4GB, 128GB, Wi-Fi + LTE, Data Only) 2K Display, Qualcomm Snapdragon, Quad Speakers, Dolby Atmos, TUV Certified Eye Protection, Google Kids, Face Unlock Technology"
          imgUrl="https://m.media-amazon.com/images/I/51JdIeU3alL._SY450_.jpg"
          price="80"
          rating="3"
        />
        <Product
          id="12"
          title="OPPO F21 Pro (Auroral Blue, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers"
          imgUrl="https://m.media-amazon.com/images/I/81C5IjTxTML._SX569_.jpg"
          price="199.99"
          rating="4"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Butterfly Smart Glass 3 Burner Gas Stove, Black"
          imgUrl="https://m.media-amazon.com/images/I/51TYBmz4JXL._SX425_.jpg"
          price="89.99"
          rating="4"
        />
      </div>
    </div>
  );
}

export default Home;
