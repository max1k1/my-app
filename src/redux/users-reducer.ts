import { usersAPI } from '../api/api';
import { UserDateType } from '../types/types';
import { updateObjectInArray } from '../utils/validators/object-helpers';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  usersDate: [] as Array<UserDateType>,
  totalUsersCount: 10,
  pageSize: 5,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
  pagesListSize: 10,
};
export type InitialStateType = typeof initialState;
const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersDate: updateObjectInArray(state.usersDate, action.id, 'id', { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersDate: updateObjectInArray(state.usersDate, action.id, 'id', { followed: false }),
      };
    case SET_USERS:
      return { ...state, usersDate: action.usersDate };
    case SET_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FATCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((userId) => userId !== action.userId),
      };
    default:
      return state;
  }
};
type SetUsersActionCreatorType = {
  type: typeof SET_USERS;
  usersDate: Array<UserDateType>;
};
const setUsers = (usersDate: Array<UserDateType>): SetUsersActionCreatorType => ({
  type: SET_USERS,
  usersDate,
});
type FollowSuccessActionCreatorType = {
  type: typeof FOLLOW;
  id: number;
};
const followSuccess = (id: number): FollowSuccessActionCreatorType => ({ type: FOLLOW, id });
type UnFollowSuccessActionCreatorType = {
  type: typeof UNFOLLOW;
  id: number;
};
const unFollowSuccess = (id: number): UnFollowSuccessActionCreatorType => ({
  type: UNFOLLOW,
  id,
});
type SetPageActionCreatorType = {
  type: typeof SET_PAGE;
  pageNumber: number;
};
const setPage = (pageNumber: number): SetPageActionCreatorType => ({
  type: SET_PAGE,
  pageNumber,
});
type SetTotalUsersCountActionCreatorType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionCreatorType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
type ToggleIsFatchingActionCreatorType = {
  type: typeof TOGGLE_IS_FATCHING;
  isFetching: boolean;
};
const toggleIsFatching = (isFetching: boolean): ToggleIsFatchingActionCreatorType => ({
  type: TOGGLE_IS_FATCHING,
  isFetching,
});
type TogglefollowingInProgressActionCreatorType = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS;
  isFetching: boolean;
  userId: number;
};
const togglefollowingInProgress = (
  isFetching: boolean,
  userId: number,
): TogglefollowingInProgressActionCreatorType => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (pageSize: number, pageNumber: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFatching(true));
    const data = await usersAPI.getUsers(pageSize, pageNumber);
    dispatch(toggleIsFatching(false));
    dispatch(setUsers(data.items));
    dispatch(setPage(pageNumber));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnfollowFlow = (apiMethod: any, actionCreator: any, userId: number) => {
  return async (dispatch: any) => {
    dispatch(togglefollowingInProgress(true, userId));
    let resultCode = await apiMethod(userId);
    if (resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(togglefollowingInProgress(false, userId));
  };
};
export const unFollow = (userId: number) => {
  return followUnfollowFlow(usersAPI.unfollow.bind(usersAPI), unFollowSuccess, userId);
};
export const follow = (userId: number) => {
  return followUnfollowFlow(usersAPI.follow.bind(usersAPI), followSuccess, userId);
};
export default usersReducer;
