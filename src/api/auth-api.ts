import { APIResponseType } from './api.ts';
import { instance, ResultCodesEnum, ResultCodeForCaptcha } from './api.ts';

export type MeResponseDataType = { id: number; email: string; login: string };

export type LoginResponseType = {
  userId: number;
};

export const authAPI = {
  me() {
    return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string) {
    return instance
      .post<APIResponseType<LoginResponseType, ResultCodesEnum | ResultCodeForCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
