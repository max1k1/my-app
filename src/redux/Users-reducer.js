import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FATCHING ="TOGGLE_IS_FATCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS="TOGGLE_FOLLOWING_IN_PROGRESS"
const initialState = {
  usersDate: [ ],
  totalUsersCount: 10,
  pageSize: 5,
  currentPage: 1,
  isFetching: true,
  followingInProgress:[2]
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersDate: state.usersDate.map(u => {
            if (u.id === action.id) {
              return { ...u, followed: true };
            }
            return u;
          })
        }
    case UNFOLLOW:
      return {
        ...state,
        usersDate: state.usersDate.map(u => {
            if (u.id === action.id) {
              return { ...u, followed: false };
            }
            return u;
          })
        }
      case SET_USERS:
        return {...state, usersDate: action.usersDate}
      case SET_PAGE:
        return {...state, currentPage: action.pageNumber}
      case SET_TOTAL_USERS_COUNT: 
      return {...state, totalUsersCount: action.totalUsersCount}
      case TOGGLE_IS_FATCHING: {
      return {...state, isFetching: action.isFetching}
      }
      case TOGGLE_FOLLOWING_IN_PROGRESS:
        return{...state, followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(userId=>userId!==action.userId)
        }
    default:
      return state;
  }
};
export const setUsers =(usersDate) =>({
  type: SET_USERS,
  usersDate
});
export const followSuccess = (id) => ({ type: FOLLOW, id });
export const unFollowSuccess = (id) => ({
  type: UNFOLLOW,
  id,
});
export const setPage =(pageNumber) =>({
  type: SET_PAGE,
  pageNumber
});
export const setTotalUsersCount =(totalUsersCount)=>({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
});
export const toggleIsFatching =(isFetching)=>({
  type: TOGGLE_IS_FATCHING,
  isFetching
});
export const togglefollowingInProgress =(isFetching, userId)=>({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId
})

export const getUsers =(pageSize, pageNumber)=>{
  return (dispatch)=>{
    dispatch(toggleIsFatching(true));
    usersAPI
      .getUsers(pageSize, pageNumber)
      .then((data) => {
        dispatch(toggleIsFatching(false));
        dispatch(setUsers(data.items));
        dispatch(setPage(pageNumber));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  };
}
export const unFollow =(userId)=>{
  return (dispatch)=>{
    dispatch(togglefollowingInProgress(true, userId));
    usersAPI
      .unfollow(userId).then((resultCode) => {
        if (resultCode === 0) {
          dispatch(unFollowSuccess(userId));
        }
        dispatch(togglefollowingInProgress(false, userId))
      });
  };
}
export const follow =(userId)=>{
  return (dispatch)=>{
    dispatch(togglefollowingInProgress(true, userId));
    usersAPI
      .follow(userId).then((resultCode) => {
        if (resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(togglefollowingInProgress(false, userId))
      });
  };
}
export default usersReducer; 
