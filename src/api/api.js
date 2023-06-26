import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "bc7a5dd0-8ab7-4da3-8ed2-7daeee152336" },
});
export const usersAPI = {
  getUsers(pageSize=10, currentPage=1) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        return response.data;
      });
  },
  follow(userId){
    return instance.post(
      `follow/${userId}`
    ).then(response =>{
      return response.data.resultCode;
    })
  },
  unfollow(userId){
    return instance.delete(
      `follow/${userId}`
    ).then(response =>{
      return response.data.resultCode;
    })
  },
  getUserProfile(userId){
    return instance.get(`profile/${userId}`)
  }
  
};
export const authAPI = {
  getAuthUserData(){
    return instance.get(`auth/me`)
  }
}