import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error("SOS", error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.button}>
          <Link to={goBackRef.current}> Go Back </Link>
        </div>
        <div className={s.movie}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div className={s.info}>
            <h2 className={s.title}>{movie.original_title}</h2>
            <p>
              <strong>User Score:</strong> {Math.round(movie.vote_average * 10)}
              {"%"}
            </p>

            <p>
              {" "}
              <strong>Overview:</strong>
              {movie.overview}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
        <div className={s.addInfo}>
          <p>Additional information</p>
          <nav>
            <ul>
              <li className={s.link}>
                <Link to="cast" className={s.link}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" className={s.link}>
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
