import React from "react";

const movie = (movieItem) => {
  console.log("movie item", movieItem);
  const { movie } = movieItem;
  return (
    <div>
      Title: {movie.Actors}
      <div className="card">
        <img
          src="https://image.tmdb.org/t/p/original/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default movie;
