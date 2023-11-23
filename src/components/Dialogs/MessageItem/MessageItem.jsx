import React from "react";
import styles from '../Dialogs.module.css'
const MessageItem = ({ id, message }) => {
  return <div className={styles.message} >{message}</div>;
};

export default MessageItem;
