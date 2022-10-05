import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/1">Max</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/2">Dima</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3">Pavel</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/4">Katya</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/5">Vinith</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>some message</div>
        <div className={styles.message}>classic</div>
        <div className={styles.message}>dvoe2</div>
        <div className={styles.message}>Walking lonely road</div>
        <div className={styles.message}>Die alone</div>
      </div>
    </div>
  );
};

export default Dialogs;
