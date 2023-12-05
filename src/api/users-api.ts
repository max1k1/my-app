import { AxiosPromise } from 'axios';
import { GetItemsType, APIResponseType, instance } from './api.ts';

export const usersAPI = {
  async getUsers(pageSize = 10, currentPage = 1) {
    const response = await instance.get<GetItemsType>(
      `users?count=${pageSize}&page=${currentPage}`,
    );
    return response.data;
  },
  async follow(userId: number) {
    const response = await instance.post<APIResponseType>(`follow/${userId}`);
    return response.data.resultCode;
  },
  async unfollow(userId: number) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data.resultCode as AxiosPromise<APIResponseType>;
  },
};
