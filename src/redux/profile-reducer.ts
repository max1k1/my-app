import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';
// import testImgIcon from '../assets/images/1post.png';
import { PhotosType, PostType, ProfileType } from '../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';

const initialState = {
  postsDate: [
    {
      id: 1,
      text: 'Kharkiv, 369 years of the city that survived under the yellow-blue flag 🇺🇦❤️',
      likeCount: 5,
      img: null as PhotosType | null, // fix it
    },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',
};
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
            img: action.img,
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
    case SET_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    default:
      return state;
  }
};
type ActionsTypes =
  | AddPostType
  | SetUserProfilePostType
  | DeletePostType
  | SetStatusType
  | SetPhotoSuccessType;
type ExtendedlActionTypes = ActionsTypes | FormAction;
type AddPostType = {
  type: typeof ADD_POST;
  newPostText: string;
  img: PhotosType;
};
export const addPost = (newPostText: string, img: PhotosType): AddPostType => ({
  type: ADD_POST,
  newPostText,
  img,
});
type SetUserProfilePostType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
const setUserProfile = (profile: ProfileType): SetUserProfilePostType => ({
  type: SET_USER_PROFILE,
  profile,
});
type DeletePostType = {
  type: typeof DELETE_POST;
  id: number;
};
export const deletePost = (id: number): DeletePostType => ({
  type: DELETE_POST,
  id,
});
type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});
type SetPhotoSuccessType = {
  type: typeof SET_PHOTO_SUCCESS;
  photos: PhotosType;
};
const setPhotoSucces = (photos: PhotosType): SetPhotoSuccessType => ({
  type: SET_PHOTO_SUCCESS,
  photos,
});
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ExtendedlActionTypes>;
//---------------------------------------------------------------------------------------//
export const getUserProfile =
  (userId: number | null): ThunkType =>
  async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
export const updatePhoto =
  (file: any): ThunkType =>
  async (dispatch: any) => {
    let response = await profileAPI.updatePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(setPhotoSucces(response.data.data.photos));
    }
  };

export const updateProfileInfo =
  (profileData: ProfileType): ThunkType =>
  async (dispatch, getState) => {
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
