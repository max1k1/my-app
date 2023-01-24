import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = ({state}) => {

  const messagesElements = state.messagesData.map((message) => (
    <MessageItem message={message.message} />
  ));
  const dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} userName={dialog.userName}></DialogItem>
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
