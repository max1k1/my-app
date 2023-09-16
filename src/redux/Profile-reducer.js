import { profileAPI } from "../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO_SUCCES = "SET_PHOTO_SUCCES";
const initialState = {
  postsDate: [
    { postId: 1, text: "Some text", likeCount: 5 },
    { postId: 2, text: "Dvi", likeCount: 3 },
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
    case DELETE_POST:
      return {
        ...state,
        postsDate: state.postsDate.filter((p) => p.id !== action.id),
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_PHOTO_SUCCES:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
const setPhotoSucces = (photos) => ({
  type: SET_PHOTO_SUCCES,
  photos,
});
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const updatePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.updatePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(setPhotoSucces(response.data.data.photos));
  }
};
export default profileReducer;
