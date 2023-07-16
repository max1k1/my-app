import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkBox"} name={"rememberMe"} component={"input"} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "login" })(LoginForm);
