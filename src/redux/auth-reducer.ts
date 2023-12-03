import { FormAction, stopSubmit } from 'redux-form';
import { ResultCodeForCaptcha, ResultCodesEnum, authAPI, securityAPI } from '../api/api.ts';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './store';
const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null, // if null, then captcha is not required
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'GET_CAPTCHA_URL_SUCCESS': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
type ActionsTypes = InferActionsTypes<typeof actions>;
type ExtendedlActionTypes = ActionsTypes | FormAction;

export const actions = {
  setAuthUserData: (id: number| null, email: string| null, login: string| null, isAuth: boolean) =>
    ({
      type: 'SET_AUTH_USER_DATA',
      payload: { id, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ExtendedlActionTypes>;
export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
  }
};
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
): ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };
};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const captchaUrl = await securityAPI.getCaptchaUrl();
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl.url));
};
export const logout = (): ThunkType => {
  return async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
