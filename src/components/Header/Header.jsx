import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/images/28638.jpg';
import downArrow from '../../assets/images/down-arrow.png';
import profilePicutreHeader from '../../assets/images/profilePicutreHeader.png';
import { useState } from 'react';
const Header = (props) => {
  const [popUpMode, setPopUpMode] = useState(false);
  return (
    <header className={styles.headerWraper}>
      <div className={styles.header}>
        <div className={styles.logoBlock}>
          <img src={headerImage} alt="webSiteLogo" />
          <div> React Social Media</div>
        </div>
        <div>
          {props.isAuth ? (
            <div className={styles.loginBlockWraper}>
            <div className={styles.loginBlock} onClick={()=>setPopUpMode(!popUpMode)}>
              {popUpMode ? (
                <div className={styles.popUp} >
                  {props.login} - <button onClick={props.logout}>Log out</button>
                </div>
              ) : (
                ''
              )}
              <img
                className={styles.profilePicutreHeader}
                src={profilePicutreHeader}
                alt="profilePicutreHeader"
              />
              <img className={styles.downArrow} src={downArrow} alt="downArrow" />
            </div>
            </div>
          ) : (
            <NavLink to="/login">Login:</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
