import React, { useState } from 'react';
import styles from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItems from './DialogItems/DialogItems';
import DialogForm from './DialogForm/DialogForm';

const Dialogs = ({ sendMessage, dialogsPage }) => {
  const [dialogsList, setDialogsList] = useState(dialogsPage.dialogsData); // CHANGE THIS PART - SYNC WITH REDUX!
  const addNewMessage = (values) => {
    sendMessage(values.newMessageText);
  };
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem key={message.id} message={message.message} />
  ));
  const dialogsElements = dialogsList.map((obj) => (
    <DialogItems key={obj.id} obj={obj} dialogsList={dialogsList} setDialogsList={setDialogsList}></DialogItems>
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
