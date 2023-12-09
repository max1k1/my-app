import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../redux/store';

const mapStateToProps = (state: AppStateType) =>
  ({
    isAuth: state.auth.isAuth,
  } as MapPropsType);
type MapPropsType = {
  isAuth: boolean;
};
type MapDispatchType = {};
export function withAuthRedirect(WrappedComponent: React.ComponentType) {
  const RedirectComponent: React.FC<MapPropsType & MapDispatchType> = (props) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Navigate to="/login/"></Navigate>;
    return <WrappedComponent {...restProps} />;
  };
  return connect<MapPropsType, MapDispatchType, {}, AppStateType>(
    mapStateToProps,
    {},
  )(RedirectComponent);
}
