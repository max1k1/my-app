import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import styles from "../../common/FormsControls/FormsControls.module.css";
const usernameMaxLength = maxLengthCreator(30);
const passwordMaxLength = maxLengthCreator(30);
const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, usernameMaxLength]}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          type="password"
          component={Input}
          validate={[required, passwordMaxLength]}
        />
      </div>
      <div>
        <Field type={"checkBox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      {error && (
        <div className={styles.formSummaryError}>{error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "login" })(LoginForm);
