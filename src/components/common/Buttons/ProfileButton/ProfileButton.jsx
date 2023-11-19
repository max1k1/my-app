import React from 'react';
import styles from './ProfileButton.module.css'

const ProfileButton = ({ name }) => {
  return (
    <button className={styles.profileButton}>
      {name}
    </button>
  );
};
export default ProfileButton;
