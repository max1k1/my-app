import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/Dialog-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    changeText: (dialogsText) => {
      dispatch(updateNewMessageTextCreator(dialogsText));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
// <Dialogs
//   changeText={changeText}
//   sendMessage={sendMessage}
//   messagesData={state.dialogsPage.messagesData}
//   dialogsData={state.dialogsPage.dialogsData}
//   newMessageText={state.dialogsPage.newMessageText}
// />

export default DialogsContainer;
