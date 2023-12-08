import React from 'react';
import styles from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem.jsx';
import DialogItems from './DialogItems/DialogItem.jsx';
import DialogForm from './DialogForm/DialogForm.tsx';
import { InitialStateType } from '../../redux/dialogs-reducer.ts';

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (newMessageText: string) => void;
};
export type NewMessageFormType = {
  newMessageText: string;
};
const Dialogs: React.FC<PropsType> = ({ sendMessage, dialogsPage }) => {
  const addNewMessage = (values: any)=> { // TO DO //////////////////////////////////////
    sendMessage(values.newMessageText);
  };
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem key={message.id} message={message.text} id={message.id}/>
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
