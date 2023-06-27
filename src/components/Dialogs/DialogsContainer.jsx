import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
