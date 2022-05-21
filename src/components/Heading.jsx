import React from "react";

const Heading = () => {
  const hotelImage = "https://cdn-icons-png.flaticon.com/512/2933/2933772.png";

  return (
    <header className="App-header">
      <img
        src={hotelImage}
        alt="Hotel Logo"
        width={25}
        style={{
          margin: "0 15px"
        }}
      />
      CYF Hotel
    </header>
  );
};

export default Heading;
