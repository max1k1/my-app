import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbarList, setNavbarList] = useState([
    { name: 'Profile', ref: '/profile', isActive: false },
    { name: 'Dialogs', ref: '/dialogs', isActive: false },
    { name: 'Users', ref: '/users', isActive: false },
    { name: 'News', ref: '/news', isActive: false },
    { name: 'Music', ref: '/music', isActive: false },
    { name: 'Settings', ref: '/settings', isActive: false },
  ]);
  return (
    <nav className={styles.nav}>
      {navbarList.map((obj, i) => (
        <div key={i}
          className={obj.isActive ? styles.active : styles.item}
          onMouseEnter={() => {
            obj.isActive = true;
            setNavbarList([...navbarList]);
          }}
          onMouseLeave={() => {
            obj.isActive = false;
            setNavbarList([...navbarList]);
          }}>
          <NavLink
            to={obj.ref}
            className={(navData) => (navData.isActive ? styles.activeRef : styles.itemRef)}>
            {obj.name}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};
export default Navbar;
