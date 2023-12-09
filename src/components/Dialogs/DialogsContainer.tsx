import Dialogs from './Dialogs.tsx';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.tsx';
import { compose } from 'redux';
import { actions } from '../../redux/dialogs-reducer.ts';
import { AppStateType } from '../../redux/store.ts';

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, { sendMessage: actions.sendMessage }),
)(Dialogs);
