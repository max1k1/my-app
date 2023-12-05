import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/images/28638.jpg';
import downArrow from '../../assets/images/down-arrow.png';
import profilePicutreHeader from '../../assets/images/profilePicutreHeader.png';
import { useState } from 'react';
// type PropsType = {
//   isAuth: boolean;
//   login: string;
//   logout: () => void;
// };
const Header = (props: any) => {
  const [popUpMode, setPopUpMode] = useState(false);
  const popUpModeRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popUpModeRef.current && !event.composedPath().includes(popUpModeRef.current)) {
        setPopUpMode(false);
      }
    };
    if (popUpMode) {
      document.body.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [popUpMode]);
  return (
    <header className={styles.headerWraper}>
      <div className={styles.header}>
        <NavLink className={styles.logoBlock} to="/profile">
          <img src={headerImage} alt="webSiteLogo" />
          <div> React Social Media</div>
        </NavLink>
        <div>
          <div className={styles.loginBlockWraper}>
            <div
              ref={popUpModeRef}
              className={styles.loginBlock}
              onClick={() => setPopUpMode(!popUpMode)}>
              {popUpMode ? (
                <div className={styles.popUp}>
                  <div className={styles.popUpHead}>
                    {props.isAuth ? props.login : 'user@gmail.com'}
                  </div>
                  <div className={styles.popUpList}>
                    <div>Support</div>
                    <div>
                      <NavLink to="https://max1k1.github.io/react-pizza-website/#/?option=-rating&activeCategory=0&currentPage=1">
                        Pizzeria website
                      </NavLink>
                    </div>
                    {props.isAuth ? (
                      <div onClick={props.logout}>Log out</div>
                    ) : (
                      <div>
                        {' '}
                        <NavLink to="/login">Log in</NavLink>
                      </div>
                    )}
                  </div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
