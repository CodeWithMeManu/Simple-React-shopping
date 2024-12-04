import React from "react";

const Header = () => {
  return (
    <div className="shopping-container">
      <h2 className="shopping-heading">shopping Mall</h2>
      <ul className="list-container">
        <li>Woman</li>
        <li>Men</li>
        <li>Children</li>
        <li>Beauty</li>
        <input type="text" className="search-input" placeholder="Search" />
        <li className="list">Sign/Signup</li>
      </ul>
      <p className="cart-title">Cart</p>
    </div>
  );
};

export default Header;
