import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import headerImage from "../../assets/images/background-colorful-sky-concept-beautiful-sunset-sky-nature-sky-backgrounds-generative-ai_911620-16754.avif"
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
      {/* <img
        src={headerImage}
        alt="webSiteLogo"
      /> */}
      </div>
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>{" "}
          </div>
        ) : (
          <NavLink to="/login">Login:</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
