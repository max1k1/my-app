import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer.ts';
import { AppStateType } from './store.ts';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false as boolean,
};
export type InitialStateType = typeof initialState;
const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};
type ActionsTypes = InitializedSuccessActionType;
type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};
export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    const response = await dispatch(getAuthUserData());
    Promise.all([response]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
