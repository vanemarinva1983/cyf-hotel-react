import React from "react";

const RestaurantButton = props => {
  return (
    <button className="bnt bnt-primary" onClick={props.orderFunctionProps}>
      Add
    </button>
  );
};

export default RestaurantButton;
