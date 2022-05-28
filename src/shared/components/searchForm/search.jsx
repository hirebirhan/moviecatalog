import React from "react";

const search = () => {
  return (
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter movie name" />
      <button class="btn btn-outline-primary" type="button">
        Search
      </button>
    </div>
  );
};

export default search;
