import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "bc7a5dd0-8ab7-4da3-8ed2-7daeee152336" },
});
export const usersAPI = {
  getUsers(pageSize = 10, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data.resultCode;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data.resultCode;
    });
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
  updateStatus(status){
    return instance.put(`profile/status`, {status});
  }
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
