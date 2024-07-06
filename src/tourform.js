
import React, { useState } from "react";

const tourform = ({ addtour }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addtour(inputValue);
    setInputValue("");
  };

  return (
    <div className="tour-form">
      <h2>Add tour</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter tour place"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default tourform;
