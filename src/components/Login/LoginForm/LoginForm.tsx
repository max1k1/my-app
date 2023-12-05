import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input, Checkbox } from '../../common/FormsControls/FormsControls.tsx';
import { maxLengthCreator, required } from '../../../utils/validators/validators.ts';
import stylesFormControl from '../../common/FormsControls/FormsControls.module.css';
import MainButton from '../../common/Buttons/MainButton/MainButton.tsx';
import styles from '../Login.module.css';
import { LoginFormValuesType } from '../Login';
const usernameMaxLength = maxLengthCreator(30);
const passwordMaxLength = maxLengthCreator(30);
type LoginFormOwnProps = {
  captchaUrl: string | null;
};
const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.loginFormBlock}>
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
      <div className={styles.rememberMeBlock}>
        <div className={styles.rememberMeInput}>
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
      {error && <div className={stylesFormControl.formSummaryError}>{error}</div>}
      <div>
        <MainButton name="Log in"></MainButton>
      </div>
      <div className={styles.loginAccount}>
        <div>Guest Account</div>
        <div className={styles.loginAccountData}>
          {' '}
          <div>Email: ytfgftghcghc@gmail.com</div> <div>Password: !7!k5zgN5x5JEAi</div>
        </div>
      </div>
    </form>
  );
};
export default reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm);
