import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import postImg1 from '../assets/images/1post.png';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO_SUCCES = 'SET_PHOTO_SUCCES';
const SET_PROFILE_INFO_SUCCES = 'SET_PROFILE_INFO_SUCCES';
const initialState = {
  postsDate: [
    {
      postId: 1,
      text: 'Kharkiv, 369 years of the city that survived under the yellow-blue flag 🇺🇦❤️',
      likeCount: 5,
      postImg: postImg1,
    },
  ],
  profile: null,
  status: '',
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
            likeCount: 0,
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
    case SET_PROFILE_INFO_SUCCES:
      const { fullName, aboutMe, lookingForAJobDescription } = action.profileData;
      return {
        ...state,
        profile: {
          ...state.profile,
          fullName: fullName,
          aboutMe: aboutMe,
          lookingForAJobDescription: lookingForAJobDescription,
        },
      };
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
export const updateProfileInfo = (profileData) => async (dispatch, getState) => {
  const id = getState().auth.id;
  if (profileData.lookingForAJob === undefined) {
    // crutch(backend mistake)
    profileData.lookingForAJobDescription = 'nothing';
  }
  const response = await profileAPI.saveProfileInfo(profileData);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(id));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};
export default profileReducer;
