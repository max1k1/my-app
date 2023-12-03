import React from 'react';
import styles from './FormsControls.module.css';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

type FormContolPropsType = {
  meta: WrappedFieldMetaProps;
  children: React.ReactNode
};

const FormControl: React.FC<FormContolPropsType> = ({ meta: { touched, error }, children }) => {
  const haveError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (haveError ? styles.error : '010')}>
      <div>{children}</div>
      {haveError && <span>{error}</span>}
    </div>
  );
};

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <div className={styles.textArea}>
        <textarea {...input} {...restProps} />
      </div>
    </FormControl>
  );
};
// input have to split 2 props(meta, child) - they have no reason to be spreaded
export const Input: React.FC<WrappedFieldProps> = (props) => {
  // const { input, meta, child, ...restProps } = props;
  console.log(props)
  const { input, meta, ...restProps } = props;
  console.log(props)
  return (
    <FormControl {...props}>
      <div className={styles.text}>
        <input {...input} {...restProps} />
      </div>
    </FormControl>
  );
};
export const Checkbox: React.FC<WrappedFieldProps> = (props) => {
  // const { input, meta, child, ...restProps } = props;
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <div className={styles.checkbox}>
        <input {...input} {...restProps} />
      </div>
    </FormControl>
  );
};
