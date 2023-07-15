import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.addMessageField}>
        <div>
          <Field
          name="newMessageText"
            placeholder="Enter your message"
            component={"textarea"}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};
const DialogReduxForm = reduxForm({
  form: "dialog",
})(DialogForm);
const Dialogs = ({sendMessage, dialogsPage }) => {
  const addNewMessage = (values) => {
    sendMessage(values.newMessageText);
  };
  const messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem message={message.message} />
  ));
  const dialogsElements = dialogsPage.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} userName={dialog.userName}></DialogItem>
  ));
  // const sendMessageElement = () => {
  //   sendMessage();
  // };
  // const newMessageElement = React.createRef();
  // const onChangeText = () => {
  //   let messageText = newMessageElement.current.value;
  //   changeText(messageText);
  // };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messageArea}>
        <div className={styles.messages}>{messagesElements}</div>
        {/* <div className={styles.addMessageField}>
          <textarea
            ref={newMessageElement}
            value={dialogsPage.newMessageText}
            onChange={onChangeText}
          ></textarea>
          <button onClick={sendMessageElement}>Send</button>
        </div> */}
        <DialogReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
