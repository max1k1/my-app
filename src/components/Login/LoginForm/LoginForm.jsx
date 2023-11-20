import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import styles from '../../common/FormsControls/FormsControls.module.css';
import '../Login.css';
import MainButton from '../../common/Buttons/MainButton/ProfileButton';

const usernameMaxLength = maxLengthCreator(30);
const passwordMaxLength = maxLengthCreator(30);
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className="loginFormBlock">
      <h1>React Social Media</h1>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required, usernameMaxLength]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          type="password"
          component={Input}
          validate={[required, passwordMaxLength]}
        />
      </div>
      <div className="rememberMeBlock">
        <div className="rememberMeInput">
          <Field type={'checkbox'} name={'rememberMe'} component={Checkbox} />
        </div>
        Remember me
      </div>
      {captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captchaUrl" />
          <Field placeholder={'Symbols from image'} name={'captcha'} component={Input} />
        </div>
      )}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <MainButton name="Log in"></MainButton>
      </div>
    </form>
  );
};
export default reduxForm({ form: 'login' })(LoginForm);
