import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownDivider, Label } from "semantic-ui-react";

export default function CartSummary() {

  // "useSelector" ile oluşturduğumuz sepeti "cartItems" içerisine attık
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <div>
      <Dropdown item text="Sepetiniz">
              <Dropdown.Menu>
                {
                  cartItems.map((cartItem)=>(
                    <Dropdown.Item key={cartItem.product.productId}>
                      {console.log(cartItem)}
                      <span>{cartItem.product.productName}</span><br/>
                      <Label>
                        {cartItem.quantity}
                      </Label>
                    </Dropdown.Item>
                  ))
                }
                <DropdownDivider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    </div>
  )
}
