import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/images/28638.jpg';
const Header = (props) => {
  console.log(props)
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
