import React, { useEffect } from "react";
import Movie from "../movie/movieItem";
import { movieStore } from "../../../states/movie.state.store";

const movies = () => {
  const { movies, getMovies } = movieStore.getState();
  console.log("store", movies);
  getMovies();

  useEffect(() => {
    getMovies();
  }, []);

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
