import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import {useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state=>state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/")// Çıkma işlemi yapacağımız zaman ana sayfaya dönmemizi sağlar
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.lenghth>0 && <CartSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
