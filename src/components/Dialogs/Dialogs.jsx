import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import DialogForm from "./DialogForm/DialogForm";

const Dialogs = ({ sendMessage, dialogsPage }) => {
  const addNewMessage = (values) => {
    sendMessage(values.newMessageText);
  };
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem key={message.id} message={message.message} />
  ));
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} userName={dialog.userName}></DialogItem>
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.chat}>
        <div>{messagesElements}</div>
        <DialogForm onSubmit={addNewMessage} />
      </div>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
    </div>
  );
};

export default Dialogs;