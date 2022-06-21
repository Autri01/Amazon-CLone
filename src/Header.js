/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const user = auth.currentUser;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <img
          className="header_searchIcon"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <Link to="/checkout">
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className="header_basketIcon"
            />
          </Link>
          <span className="header_optionLineTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
