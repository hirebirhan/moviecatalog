import React, { useState } from "react";
import movieStore from "../../../states/movie.store";

const search = () => {
  const [keyword, setKeyWord] = useState("");
  const { searchMovies } = movieStore();

  const handleKeyChange = (e) => {
    setKeyWord(e.currentTarget.value);
  };
  const handleSearch = () => {
    if (keyword) searchMovies(keyword);
  };

  return (
    <div className="input-group flex-row ">
      <input
        type="text"
        value={keyword}
        onChange={handleKeyChange}
        className="form-control "
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
