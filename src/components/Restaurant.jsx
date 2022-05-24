import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(Order + 1);
  }
  return (
    <div className="restaurant-style">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate Cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;
