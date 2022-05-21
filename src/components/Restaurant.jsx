import React, { useState } from "react";
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
        <li>
          Pizzas: {orders}{" "}
          <button
            className="btn btn-primary"
            onClick={() => {
              setOrders(orders + 1);
            }}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
