import React from "react";
import Movie from "../movie/movieItem";
import { movieStore } from "../../../states/movie.state.store";

const movies = () => {
  const { movies, getMovies } = movieStore.getState();
  console.log("store", movies);

  return (
    <div>
      {" "}
      {movies.map((item) => {
        return <Movie movie={item} />;
      })}
    </div>
  );
};
export default movies;
