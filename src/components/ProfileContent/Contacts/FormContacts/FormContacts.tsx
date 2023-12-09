import styles from './FormContacts.module.css';
import { Field } from 'redux-form';
import { Input } from '../../../common/FormsControls/FormsControls.tsx';
import React from 'react';
const FormContacts = ({ contacts }) => {
  return (
    <div className={styles.contacts}>
      {Object.keys(contacts).map((key) => {
        return (
          <div key={key} className={styles.singleContact}>
            {key}: <Field name={`contacts.${key}`} placeholder={key} component={Input} />
          </div>
        );
      })}
    </div>
  );
};

export default FormContacts;
