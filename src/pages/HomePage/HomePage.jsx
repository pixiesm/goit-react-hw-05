import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    document.title = "Home Page";
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <h2 className={s.title}>Trending today</h2>
        <MovieList movies={trendMovies} />
      </div>
    </>
  );
};

export default HomePage;
