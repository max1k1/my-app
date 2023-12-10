import React from 'react';
import preloader from '../../../assets/preloader/preloader2.gif';
import styles from './Preloader.module.css';
type PropsType = {};
const Preloader: React.FC<PropsType> = () => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};
export default Preloader;
