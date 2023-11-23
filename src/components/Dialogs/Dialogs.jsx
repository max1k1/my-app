import React from 'react';
import styles from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItems from './DialogItems/DialogItem';
import DialogForm from './DialogForm/DialogForm';

const Dialogs = ({ sendMessage, dialogsPage }) => {
  const addNewMessage = (values) => {
    sendMessage(values.newMessageText);
  };
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem key={message.id} message={message.message} />
  ));
  const dialogsElements = dialogsPage.dialogsData.map((obj) => (
    <DialogItems key={obj.id} obj={obj}></DialogItems>
  ));
  return (
    <div className={styles.dialogs}>
      <div className={styles.chatWrapper}>
        <div className={styles.chat}>
          <div className={styles.messagesField}>{messagesElements}</div>
        </div>
        <DialogForm onSubmit={addNewMessage} />
      </div>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
    </div>
  );
};

export default Dialogs;
