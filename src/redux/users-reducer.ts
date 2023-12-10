import { usersAPI } from '../api/users-api.ts';
import { UserDateType } from '../types/types';
import { updateObjectInArray } from '../utils/validators/object-helpers.ts';
import { BaseThunkType, InferActionsTypes } from './store';

const initialState = {
  usersDate: [] as Array<UserDateType>,
  totalUsersCount: 10,
  pageSize: 5,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
  pagesListSize: 10,
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        usersDate: updateObjectInArray(state.usersDate, action.id, 'id', { followed: true }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        usersDate: updateObjectInArray(state.usersDate, action.id, 'id', { followed: false }),
      };
    case 'SET_USERS':
      return { ...state, usersDate: action.usersDate };
    case 'SET_PAGE':
      return { ...state, currentPage: action.pageNumber };
    case 'SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.totalUsersCount };
    case 'TOGGLE_IS_FATCHING': {
      return { ...state, isFetching: action.isFetching };
    }
    case 'TOGGLE_FOLLOWING_IN_PROGRESS':
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

export const actions = {
  setUsers: (usersDate: Array<UserDateType>) =>
    ({
      type: 'SET_USERS',
      usersDate,
    } as const),
  followSuccess: (id: number) => ({ type: 'FOLLOW', id } as const),
  unFollowSuccess: (id: number) =>
    ({
      type: 'UNFOLLOW',
      id,
    } as const),
  setPage: (pageNumber: number) =>
    ({
      type: 'SET_PAGE',
      pageNumber,
    } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      totalUsersCount,
    } as const),
  toggleIsFatching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FATCHING',
      isFetching,
    } as const),
  togglefollowingInProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
      isFetching,
      userId,
    } as const),
};

export const requestUsers = (pageSize: number, pageNumber: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFatching(true));
    const data = await usersAPI.getUsers(pageSize, pageNumber);
    dispatch(actions.toggleIsFatching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setPage(pageNumber));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};
const _followUnfollowFlow = (
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes,
  userId: number,
): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.togglefollowingInProgress(true, userId));
    let resultCode = await apiMethod(userId);
    if (resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(actions.togglefollowingInProgress(false, userId));
  };
};
export const unFollow = (userId: number): ThunkType => {
  return _followUnfollowFlow(usersAPI.unfollow.bind(usersAPI), actions.unFollowSuccess, userId);
};
export const follow = (userId: number): ThunkType => {
  return _followUnfollowFlow(usersAPI.follow.bind(usersAPI), actions.followSuccess, userId);
};
export default usersReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
// type DispatchType = Dispatch<ActionsTypes>;
// type GetStateType = () => AppStateType; and type DispatchType = Dispatch<ActionsTypes>; here is the other way-> ThunkAction is other way to define type of dispatch and getState, commonly we are just difining complete Thunk.
