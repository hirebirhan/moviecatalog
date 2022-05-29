import React from "react";
import Movie from "../movie/movieItem";
import { useMovieStore } from "../../../states/movie.state.store";

const movies = () => {
  const { movies, getMovies } = useMovieStore.getState();
  getMovies();
  console.log("movies", movies);

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
