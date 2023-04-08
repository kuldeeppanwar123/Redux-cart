import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems.js";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector(state=>state.cart.showCart)

  const itemslist = useSelector(state=>state.cart.itemList);
  let total = 0;
  itemslist.forEach(element => {
    total+=element.totalPrice;
  });
  // console.log(itemslist);
  // for(let i=0; itemslist.length; i++){
  //   console.log('item is : '+itemslist[i]);
  //   //  total+=itemslist[i]['totalPrice'];
  // }

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
