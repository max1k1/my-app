const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const initialState = {
  usersDate: [ ],
};
const usersReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersDate: state.usersDate.map(u => {
            if (u.userId === action.userId) {
              return { ...u, followStatus: true };
            }
            return u;
          })
        }
    case UNFOLLOW:
      return {
        ...state,
        usersDate: state.usersDate.map(u => {
            if (u.userId === action.userId) {
              return { ...u, followStatus: false };
            }
            return u;
          })
        }
      case SET_USERS:
        if (state.usersDate.length==0) return {...state, usersDate: [...state.usersDate, ...action.usersDate]}
        return {...state}
    default:
      return state;
  }
};
export const setUsers =(usersDate) =>({
  type: SET_USERS,
  usersDate
});
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export default usersReducer; 
