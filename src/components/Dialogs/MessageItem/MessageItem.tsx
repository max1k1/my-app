import React from 'react';
import styles from '../Dialogs.module.css';
type PropsType = {
  id: number;
  message: string;
};
const MessageItem: React.FC<PropsType> = ({ id, message }) => {
  return <div className={styles.message}>{message}</div>;
};

export default MessageItem;
