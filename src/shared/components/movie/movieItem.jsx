import React from "react";

const movie = (movieItem) => {
  const { movie } = movieItem;
  return (
    <div>
      Title: {movie.Actors}
      <div className="card  ">
        <img
          src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Alita: {movie.Actors}</h5>
          <span className="movie_info">2019</span>
          <span className="movie_info float-right">
            <i className="fas fa-star"></i> 9 / 10
          </span>
        </div>
      </div>
    </div>
  );
};

export default movie;
