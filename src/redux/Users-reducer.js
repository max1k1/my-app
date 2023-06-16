const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const initialState = {
  usersDate: [ ],
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
export const follow = (id) => ({ type: FOLLOW, id });
export const unFollow = (id) => ({
  type: UNFOLLOW,
  id,
});

export default usersReducer; 
