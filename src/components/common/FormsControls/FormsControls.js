import { React } from 'react';
import styles from './FormsControls.module.css';

export const FormControl = ({ meta: { touched, error }, children }) => {
  const haveError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (haveError ? styles.error : '010')}>
      <div>{children}</div>
      {haveError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
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
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <div className={styles.text}>
        <input {...input} {...restProps} />
      </div>
    </FormControl>
  );
};
export const Checkbox = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <div className={styles.checkbox}>
        <input {...input} {...restProps} />
      </div>
    </FormControl>
  );
};
