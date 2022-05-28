import React from "react";

const movie = (movieItem) => {
  console.log("movie item", movieItem);
  const { movie } = movieItem;
  return <div>Title: {movie.Actors}</div>;
};

export default movie;
