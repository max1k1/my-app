import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "./../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };
  if (isAuth) {
    return <Navigate replace to="/profile" />;
  }
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
const mapDispatchToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapDispatchToProps, { login })(Login);
