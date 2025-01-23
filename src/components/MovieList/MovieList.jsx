import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {" "}
              <p>{movie.title}</p>
              {/* <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              /> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
