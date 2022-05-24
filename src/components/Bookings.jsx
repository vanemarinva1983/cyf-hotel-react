import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://cyf-react.glitch.me/error";

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(data => {
        return data.json();
      })
      .then(json => {
        setError(json.error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h1>Cargando...</h1>
  ) : (
    <div className="App-content">
      <div className="container">
        <h2 style={{ color: "red" }}>{error}</h2>
        <Search search={search} />
        <SearchResults result={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
