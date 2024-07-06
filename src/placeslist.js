
import React from "react";

const placeslist = ({ places }) => {
  return (
    <div className="place-list">
      <h2>place List</h2>
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place}</li>
        ))}
      </ul>
    </div>
  );
};

export default placeslist;
