import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";
import { actions } from "../../redux/dialogs-reducer.ts";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(actions.sendMessageCreator(newMessageText));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
