import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from '../Dialogs.module.css';
import { NewMessageFormType } from '../Dialogs';

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType, string>;
type PropsType = {};
const DialogForm: React.FC<
  InjectedFormProps<NewMessageFormValuesKeysType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.addMessageField}>
        <Field name="newMessageText" placeholder="Enter your message" component="textarea" />
        <button>Send</button>
      </div>
    </form>
  );
};
export default reduxForm<NewMessageFormValuesKeysType>({ form: 'dialog-add-message-form' })(
  DialogForm,
);
