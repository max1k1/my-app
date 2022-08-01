import React from "react";
import styles from './Navbar.module.css'

const Navbar = () =>{
    return <nav className={styles.nav}>
    <div className={styles.item}>Profile</div>
    <div className={styles.item}>Meesages</div>
    <div className={styles.item}>News</div>
    <div className={styles.item}>Music</div>
    <div className={styles.item}>Settings</div>
  </nav>
}

export default Navbar;