import { clsx } from "clsx";
import s from "./Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrapperLinks}>
          <NavLink className={buildLinkClass} to="/">
            Home{" "}
          </NavLink>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.activeLink);
// };
// return (
//   <>
//     <div className={s.wrapper}>
//       <p>Header</p>;
//       <div>
//         <NavLink className={buildLinkClass} to="/">
//           Home
//         </NavLink>
//         <NavLink className={buildLinkClass} to="/movies">
//           Movies
//         </NavLink>
//       </div>
//     </div>
//   </>
// );
