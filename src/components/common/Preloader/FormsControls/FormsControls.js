import { React } from "react";
import styles from "./FormsControls.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  const haveError = meta.touched && meta.error;
  return (
    <div
      className={styles.formControl + " " + (haveError ? styles.error : "010")}
    >
      <div>{props.children}</div>
      {haveError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
// input have to split 2 props(meta, child) - they have no reason to be spreaded 
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
