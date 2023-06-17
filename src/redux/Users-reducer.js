const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const initialState = {
  usersDate: [ ],
  totalUsersCount: 10,
  pageSize: 5,
  currentPage: 1,
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
      debugger
      return {...state, totalUsersCount: action.totalUsersCount}
    default:
      return state;
  }
};
export const setUsers =(usersDate) =>({
  type: SET_USERS,
  usersDate
});
export const follow = (id) => ({ type: FOLLOW, id });
export const unFollow = (id) => ({
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

export default usersReducer; 
