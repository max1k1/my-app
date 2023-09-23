import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "bc7a5dd0-8ab7-4da3-8ed2-7daeee152336" },
});
export const usersAPI = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await instance.get(
      `users?count=${pageSize}&page=${currentPage}`
    );
    return response.data;
  },
  async follow(userId) {
    const response = await instance.post(`follow/${userId}`);
    return response.data.resultCode;
  },
  async unfollow(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data.resultCode;
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  updatePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`/profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfileInfo(profileData) {
    return instance.put(`profile`, profileData);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
