import { ThunkAction } from 'redux-thunk';
import { getAuthUserData } from './auth-reducer.ts';
import { AppStateType, InferActionsTypes } from './store.ts';
const initialState = {
  initialized: false as boolean,
};
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS': {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({
    type: 'INITIALIZED_SUCCESS',
  }as const),
};
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    const response = await dispatch(getAuthUserData());
    Promise.all([response]).then(() => {
      dispatch(actions.initializedSuccess());
    });
  };
};

export default appReducer;
