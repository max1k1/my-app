import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../Dialogs.module.css";

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.addMessageField}>
          <Field
            name="newMessageText"
            placeholder="Enter your message"
            component="textarea"
          />
          <button>Send</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "dialog-add-message-form" })(DialogForm);
