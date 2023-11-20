import React from 'react';
import styles from './MainButton.module.css'

const MainButton = ({ name }) => {
  return (
    <button className={styles.mainButton}>
      {name}
    </button>
  );
};
export default MainButton;
