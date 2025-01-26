import { Field, Form, Formik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByQuery(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return searchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const handleSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
    values.query = "";
  };

  const initialValues = { query: "" };

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <div className={s.search}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.searchBar}>
          <Field name="query" />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
      <div className={s.moviesWrap}>
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default MoviesPage;
