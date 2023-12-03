import React from 'react';
import LoginForm from './LoginForm/LoginForm.tsx';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer.ts';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/store.ts';

type MapStatePropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
};
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
};
export type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({
  login,
  isAuth,
  captchaUrl,
}) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (isAuth) {
    return <Navigate replace to="/profile" />;
  }
  return <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />;
};
const mapDispatchToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapDispatchToProps, { login })(Login);
