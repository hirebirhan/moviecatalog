import React from "react";

const movie = (movieItem) => {
  const { movie } = movieItem;
  return (
    <div>
      Title: {movie.Title}
      <div className="card  ">
        <img
          src={movie.Poster}
          style={{ width: "300px", height: "300px" }}
          className="card-img-top img-responsive"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Alita: {movie.Actors}</h5>
          <span className="movie_info">{movie.Year}</span>
          <span className="movie_info float-right">
            <i className="fas fa-star"></i> 9 / 10
          </span>
        </div>
      </div>
    </div>
  );
};

export default movie;
