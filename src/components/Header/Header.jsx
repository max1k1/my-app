import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/images/cumulonimbus_clouds_in_purple_and_golden_orange_sky_background_during_sunset_or_sunrise_2.jpg';
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <img src={headerImage} alt="webSiteLogo" />
      </div>
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>{' '}
          </div>
        ) : (
          <NavLink to="/login">Login:</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
