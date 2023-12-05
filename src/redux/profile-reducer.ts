import { FormAction, stopSubmit } from 'redux-form';
import { ResultCodesEnum } from '../api/api.ts';
import { profileAPI } from '../api/profile-api.ts';
import { PhotosType, PostType, ProfileType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './store';

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

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'ADD_POST':
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
    case 'DELETE_POST':
      return {
        ...state,
        postsDate: state.postsDate.filter((p) => p.id !== action.id),
      };
    case 'SET_USER_PROFILE':
      return { ...state, profile: action.profile };
    case 'SET_STATUS':
      return { ...state, status: action.status };
    case 'SET_PHOTO_SUCCESS':
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    default:
      return state;
  }
};

export const actions = {
  addPost: (newPostText: string, img: PhotosType) =>
    ({
      type: 'ADD_POST',
      newPostText,
      img,
    } as const),
  setUserProfile: (profile: ProfileType) =>
    ({
      type: 'SET_USER_PROFILE',
      profile,
    } as const),
  deletePost: (id: number) =>
    ({
      type: 'DELETE_POST',
      id,
    } as const),
  setStatus: (status: string) =>
    ({
      type: 'SET_STATUS',
      status,
    } as const),
  setPhotoSucces: (photos: PhotosType) =>
    ({
      type: 'SET_PHOTO_SUCCESS',
      photos,
    } as const),
};

export const getUserProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(response));
  };
export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch: any) => {
    const status = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(status));
  };
export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setStatus(status));
    }
  };
export const updatePhoto =
  (file: any): ThunkType =>
  async (dispatch: any) => {
    let data = await profileAPI.updatePhoto(file);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setPhotoSucces(data.data));
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
    const data = await profileAPI.saveProfileInfo(profileData);
    if (data.resultCode === ResultCodesEnum.Success) {
      if (id != null) {
        dispatch(getUserProfile(id));
      } else{
        throw new Error("user id can't be null")
      }
    } else {
      dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  };
export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ExtendedlActionTypes = ActionsTypes | FormAction;
type ThunkType = BaseThunkType<ExtendedlActionTypes>;
