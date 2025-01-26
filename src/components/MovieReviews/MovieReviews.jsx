import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from "./MoviesReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviewsData = async () => {
      if (!movieId) return;
      const reviewsData = await fetchMovieReviews(movieId);
      setReviews(reviewsData);
    };
    getReviewsData();
  }, [movieId]);
  return (
    <div className={s.wrapper}>
      <ul>
        {!reviews.length && <h3> We don't have any reviews for this movie</h3>}
        {reviews.map((review) => (
          <li key={review.id} className={s.item}>
            <h3> Author: {review.author}</h3>
            <p> {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
