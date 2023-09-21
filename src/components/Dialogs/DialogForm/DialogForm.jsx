import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../Dialogs.module.css";

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.addMessageField}>
        <div>
          <Field
            name="newMessageText"
            placeholder="Enter your message"
            component="TextArea"
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};
export default reduxForm({ form: "dialog-add-message-form" })(DialogForm);
