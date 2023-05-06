import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({
  messagesData,
  dialogsData,
  changeText,
  sendMessage,
  newMessageText,
}) => {
  const messagesElements = messagesData.map((message) => (
    <MessageItem message={message.message} />
  ));
  const dialogsElements = dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} userName={dialog.userName}></DialogItem>
  ));
  const sendMessageElement = () => {
    sendMessage();
  };
  const newMessageElement = React.createRef();
  const onChangeText = () => {
    let messageText = newMessageElement.current.value;
    changeText(messageText);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messageArea}>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.addMessageField}>
          <textarea
            ref={newMessageElement}
            value={newMessageText}
            onChange={onChangeText}
          ></textarea>
          <button onClick={sendMessageElement}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
