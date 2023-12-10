import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
type PropsType = {
  obj: {
    id: number;
    userName: string;
  };
};
const DialogItems: React.FC<PropsType> = ({ obj }) => {
  return (
    <div className={styles.item}>
      <NavLink className={styles.itemLink} to={'/dialogs/' + obj.id}>
        {obj.userName}
      </NavLink>
    </div>
  );
};

export default DialogItems;
