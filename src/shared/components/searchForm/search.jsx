import React, { useState } from "react";
import { movieStore } from "../../../states/movie.state.store";

const search = () => {
  const { keyword, setKeyWord } = useState("");
  const { search } = movieStore.getState();

  const handleSearch = () => {
    if (keyword) search(keyword);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyWord(e.target.value)}
        className="form-control"
        placeholder="Enter movie name"
      />
      <button
        onClick={handleSearch}
        className="btn btn-outline-primary"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default search;
