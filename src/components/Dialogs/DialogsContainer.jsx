import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/Dialog-reducer";

const DialogsContainer = ({ store, dispatch }) => {
  let state = store.getState();
  const sendMessage = () => {
    dispatch(sendMessageCreator);
  };
  const changeText = (dialogsText) => {
    updateNewMessageTextCreator.text = dialogsText;
    dispatch(updateNewMessageTextCreator);
  };
  return (
    <Dialogs
      changeText={changeText}
      sendMessage={sendMessage}
      messagesData={state.dialogsPage.messagesData}
      dialogsData={state.dialogsPage.dialogsData}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
