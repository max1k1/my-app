import { getAuthUserData } from './auth-reducer.ts';
import { BaseThunkType, InferActionsTypes } from './store.ts';
const initialState = {
  initialized: false,
};

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
  initializedSuccess: () =>
    ({
      type: 'INITIALIZED_SUCCESS',
    } as const),
};

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    const response = await dispatch(getAuthUserData());
    Promise.all([response]).then(() => {
      dispatch(actions.initializedSuccess());
    });
  };
};

export default appReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
