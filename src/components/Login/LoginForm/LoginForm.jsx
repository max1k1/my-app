import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/Preloader/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
const usernameMaxLength = maxLengthCreator(12);
const passwordMaxLength = maxLengthCreator(6);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={Input}
          validate={[required, usernameMaxLength]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required, passwordMaxLength]}
        />
      </div>
      <div>
        <Field type={"checkBox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "login" })(LoginForm);
