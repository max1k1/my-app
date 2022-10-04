import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsitems}>
        <div className={styles.dialog}>Max</div>
        <div className={styles.dialog}>Sasha</div>
        <div className={styles.dialog}>Dima</div>
        <div className={styles.dialog}>Dayan</div>
        <div className={styles.dialog}>Tristan</div>
      </div>
      <div className="messages">
        <div className="message">some message</div>
        <div className="message">classic</div>
        <div className="message">dvoe2</div>
      </div>
    </div>
  );
};

export default Dialogs;
