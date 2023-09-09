import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FATCHING = "TOGGLE_IS_FATCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";
const initialState = {
  usersDate: [],
  totalUsersCount: 10,
  pageSize: 5,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  pagesListSize: 10
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersDate: updateObjectInArray(state.usersDate, action.id, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        usersDate: updateObjectInArray(state.usersDate, action.id, "id", {followed: false})
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
          : state.followingInProgress.filter(
              (userId) => userId !== action.userId
            ),
      };
    default:
      return state;
  }
};
const setUsers = (usersDate) => ({
  type: SET_USERS,
  usersDate,
});
const followSuccess = (id) => ({ type: FOLLOW, id });
const unFollowSuccess = (id) => ({
  type: UNFOLLOW,
  id,
});
const setPage = (pageNumber) => ({
  type: SET_PAGE,
  pageNumber,
});
const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
const toggleIsFatching = (isFetching) => ({
  type: TOGGLE_IS_FATCHING,
  isFetching,
});
const togglefollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (pageSize, pageNumber) => {
  return async (dispatch) => {
    dispatch(toggleIsFatching(true));
    const data = await usersAPI.getUsers(pageSize, pageNumber);
    dispatch(toggleIsFatching(false));
    dispatch(setUsers(data.items));
    dispatch(setPage(pageNumber));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnfollowFlow = (apiMethod, actionCreator, userId) => {
  return async (dispatch) => {
    dispatch(togglefollowingInProgress(true, userId));
    let resultCode = await apiMethod(userId);
    if (resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(togglefollowingInProgress(false, userId));
  };
};
export const unFollow = (userId) => {
  return followUnfollowFlow(
    usersAPI.unfollow.bind(usersAPI),
    unFollowSuccess,
    userId
  );
};
export const follow = (userId) => {
  return followUnfollowFlow(
    usersAPI.follow.bind(usersAPI),
    followSuccess,
    userId
  );
};
export default usersReducer;
