import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarList = [
    { name: 'Profile', ref: '/profile' },
    { name: 'Dialogs', ref: '/dialogs' },
    { name: 'Users', ref: '/users' },
    { name: 'News', ref: '/news' },
    { name: 'Music', ref: '/music' },
    { name: 'Settings', ref: '/settings' },
  ];
  return (
    <nav className={styles.nav}>
      {navbarList.map((obj, i) => (
        <div key={i} className={styles.item}>
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
