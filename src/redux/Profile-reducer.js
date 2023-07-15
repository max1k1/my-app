import { profileAPI } from "../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const initialState = {
  postsDate: [
    { id: 1, text: "Some text", likeCount: 5 },
    { id: 2, text: "Dvi", likeCount: 3 },
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsDate: [
          ...state.postsDate,
          {
            id: state.postsDate.length + 1,
            text: action.newPostText,
            likeCount: 5,
          },
        ],
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI
      .getProfile(userId)
      .then((response) => dispatch(setUserProfile(response.data)));
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export default profileReducer;
