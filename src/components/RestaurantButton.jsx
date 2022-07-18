import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderFunctionProps} className="bnt bnt-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
