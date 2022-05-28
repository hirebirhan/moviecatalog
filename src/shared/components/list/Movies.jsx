import React from "react";
import Movie from "../movie/movieItem";

const movies = () => {
  const movie = {
    Title: "The move",
    Year: 1990,
    Rated: "No",
    Released: 1999,
    Runtime: "2:30",
    Genre: "Horror",
    Director: "Birhan Nega",
    Writer: "Abudlmenan",
    Actors: "Rahmet",
    Plot: "scence defined",
    Language: "English",
    Country: "Eth",
    Awards: "oscar",
    Poster: "address jere",
    Ratings: [],
    Metascore: "string",
    imdbRating: "",
    imdbVotes: "string",
    imdbID: "string",
    Type: "string",
    DVD: "string",
    BoxOffice: "string",
    Production: "string",
    Website: "string",
    Response: "string",
  };
  const movies = [];
  movies.push(movie);
  return (
    <div>
      displays list of items use map and consume the movie component
      <Movie movie={movies[0]} />
    </div>
  );
};
export default movies;
