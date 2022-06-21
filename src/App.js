import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";

const stripePromise = loadStripe(
  "pk_test_51LCdYxSG4YQcHMb2jWwfZZpkKlYtM8PySFYgh0xknl7lms3sAacSNU02hOv8WBx60jrRbfG8pKLWIHA59zEC6PKm00gpwXjXzM"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/" element={[<Header />, <Home />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
