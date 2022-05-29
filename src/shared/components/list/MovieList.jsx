import React, { useEffect } from "react";
import Movie from "../movie/movieItem";
import movieStore from "../../../states/movie.store";

const movieList = () => {
  const { fetchMovies, movies } = movieStore();
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <h3>List of movies</h3>
      <div>
        {" "}
        {movies &&
          movies.map((item, index) => {
            return <Movie key={index} movie={item} />;
          })}
      </div>
    </>
  );
};
export default movieList;
