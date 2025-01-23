import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

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
    <div>
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
                width={250}
              />
              <h3>{cast.name}</h3>
              <p>Character: {cast.character}</p>
            </li>
          </li>
        ))}
      </ul>
    </div>
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
