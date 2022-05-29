import React from "react";

const search = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter movie name"
      />
      <button className="btn btn-outline-primary" type="button">
        Search
      </button>
    </div>
  );
};

export default search;
