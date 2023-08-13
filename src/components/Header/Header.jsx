import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604597937l/55198928.jpg"
        alt="webSiteLogo"
      />
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
