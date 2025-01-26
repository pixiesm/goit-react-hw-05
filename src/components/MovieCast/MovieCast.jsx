import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCastData = async () => {
      if (!movieId) return;
      const castData = await fetchMovieCast(movieId);
      setCasts(castData);
    };
    getCastData();
  }, [movieId]);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
    >
      <ul className={s.actorList}>
        {casts.map((cast) => (
          <SwiperSlide key={cast.id}>
            <li className={s.actor}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
                width={250}
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
};

export default MovieCast;

// const { movieId } = useParams();
// const [casts, setCasts] = useState([]);
// useEffect(() => {
//   const getCastData = async () => {
//     if (!movieId) return;
//     const castData = await fetchMovieCast(movieId);
//     setCasts(castData);
//   };
//   getCastData();
// }, [movieId]);

// return (
//   <div>
//     <ul>
//       {casts.map((cast) => (
//         <li key={cast.id}>
//           <li>
//             <img
//               src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
//               alt={cast.name}
//               width={250}
//             />
//             <h3>{cast.name}</h3>
//             <p>Character: {cast.character}</p>
//           </li>
//         </li>
//       ))}
//     </ul>
//   </div>
// );
