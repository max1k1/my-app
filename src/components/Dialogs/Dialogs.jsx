import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/Dialog-reducer";

const Dialogs = ({ dialogsPage, dispatch}) => {
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} />
  ));
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} userName={dialog.userName}></DialogItem>
  ));
  const newMessageElement = React.createRef();
  const sendMessageElement = () => {
    dispatch(sendMessageCreator)
  };  
  const changeText = () => {
    updateNewMessageTextCreator.text = newMessageElement.current.value;
    dispatch(updateNewMessageTextCreator);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messageArea}>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.addMessageField}>
          <textarea
            ref={newMessageElement}
            value={dialogsPage.newMessageText}
            onChange={changeText}
          ></textarea>
          <button onClick={sendMessageElement}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
