import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import { useDarkMode } from './hooks/useDarkMode';
import usePrefersDarkMode from './hooks/usePrefersDarkMode';

import "./App.css";

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  // Custom useDarkMode hook with a custom useLocalStorage hook to manage darkMode state and store preference in memory.
  const [darkMode, setDarkMode] = useDarkMode(false);

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  // Select and alter the body dependent on darkMode value without touching the CSS file.
  const body = document.querySelector('body');

  if(darkMode === false){
    body.classList.add('lightMode');
  } else if(darkMode === true){
    body.classList.remove('lightMode');
  }

  return (
    <div className={darkMode === true ? '' : 'lightMode'}>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <LightModeButton onClick={() => {setDarkMode(!darkMode);}}>Light Mode?</LightModeButton>
            </li>
          
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout">
          <CheckoutForm darkMode={darkMode} />
        </Route>
      </Router>
    </div>
  );
}

export default App;

const LightModeButton = styled.span`
  cursor: pointer;
  color: #000000;
`