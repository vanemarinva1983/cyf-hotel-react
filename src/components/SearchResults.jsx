import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Row from "./Row";

const SearchResults = props => {
  const [idCliente, setIdCliente] = useState();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(data => {
            const date1 = moment(data.checkInDate);
            const date2 = moment(data.checkOutDate);
            const diff = date2.diff(date1, "days");
            return <Row data={data} diff={diff} setIdCliente={setIdCliente} />;
          })}
        </tbody>
      </table>
      <CustomerProfile id={idCliente} />
    </div>
  );
};
export default SearchResults;
