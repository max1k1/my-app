import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
const DialogItems = ({ obj, dialogsList, setDialogsList }) => {
  return (
    <div
      onPointerEnter={() => {
        obj.isActive = true;
        setDialogsList([...dialogsList]);
      }}
      onPointerLeave={() => {
        obj.isActive = false;
        setDialogsList([...dialogsList]);
      }}
      className={obj.isActive ? styles.active : styles.item}>
      <NavLink className={styles.itemLink} to={'/dialogs/' + obj.id}>
        {obj.userName}
      </NavLink>
    </div>
  );
};

export default DialogItems;
