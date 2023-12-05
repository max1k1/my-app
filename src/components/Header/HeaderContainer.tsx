import React from 'react';
import Header from './Header.tsx';
import { connect } from 'react-redux';
import { logout } from './../../redux/auth-reducer.ts';
import { AppStateType } from '../../redux/store.ts';
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
