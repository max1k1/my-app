import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};
export const setAuthUserData = ({ id, email, login }) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login },
});
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.getAuthUserData().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthUserData({ id, login, email }));
      }
    });
  };
};
export default authReducer;
