import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({ dialogsPage, sendMessage, updateNewMessageText }) => {
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} />
  ));
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} userName={dialog.userName}></DialogItem>
  ));
  const newMessageElement = React.createRef();
  const sendMessageElement = () => {
    sendMessage();
  };
  const changeText = () => {
    const text = newMessageElement.current.value;
    updateNewMessageText(text);
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
