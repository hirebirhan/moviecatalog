import React from "react";

const movie = (movieItem) => {
  const { movie } = movieItem;
  return (
    <div className="row">
      <div className="col col-lg-2 my-1">
        <img
          src={movie.Poster}
          className="img-thumbnail mx-auto rounded"
          alt={movie.Title}
        />
      </div>
      <div className="col-8 my-1">
        <div>Title: {movie.Title}</div>
        <div> Year: {movie.Year}</div>
        <div> Type: {movie.Type}</div>
        <div>Type: {movie.imdbID}</div>
      </div>
    </div>
  );
};

export default movie;
