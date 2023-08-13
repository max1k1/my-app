import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "./../../redux/auth-reducer";
import { Navigate} from 'react-router-dom';

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  }
    if (props.isAuth) {
      return <Navigate replace to="/profile" />
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
const mapDispatchToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapDispatchToProps, { login })(Login);
