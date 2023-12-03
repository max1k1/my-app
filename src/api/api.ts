import axios from 'axios';
import { PhotosType, ProfileType } from '../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'bc7a5dd0-8ab7-4da3-8ed2-7daeee152336' },
});
export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}
export const usersAPI = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await instance.get(`users?count=${pageSize}&page=${currentPage}`);
    return response.data;
  },
  async follow(userId: number) {
    const response = await instance.post(`follow/${userId}`);
    return response.data.resultCode;
  },
  async unfollow(userId: number) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data.resultCode;
  },
  getProfile(userId: number) {
    return profileAPI.getProfile(userId);
  },
};
type ProfileResponseType = ProfileType;
type SaveProfileResponseType = {
  data: object;
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type StatusResponseType = string;
type UpdateStatusResponseType = {
  data: { status: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type UpdatePhotoResponseType = {
  data: { photos: PhotosType };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileResponseType>(`profile/${userId}`).then((res) => res.data);
  },
  saveProfileInfo(profileData: ProfileType) {
    return instance.put<SaveProfileResponseType>(`profile`, profileData).then(res => res.data);
  },
  getStatus(userId: number) {
    return instance.get<StatusResponseType>(`profile/status/${userId}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<UpdateStatusResponseType>(`profile/status`, { status })
      .then((res) => res.data);
  },
  updatePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance
      .put<UpdatePhotoResponseType>(`/profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },
};
type MeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LoginResponseType = {
  data: { userId: number };
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: Array<string>;
};
type LogoutResponseType = {
  data: { userId: number };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string) {
    return instance
      .post<LoginResponseType>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete<LogoutResponseType>(`auth/login`).then((res) => res.data);
  },
};
type CaptchaResponseType = {
  url: string;
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<CaptchaResponseType>(`security/get-captcha-url`).then((res) => res.data);
  },
};
