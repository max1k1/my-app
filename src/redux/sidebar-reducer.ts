import { InferActionsTypes } from './store';

const initialState = {};

const sidebarReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  return state;
};

export const actions = {};
export default sidebarReducer;

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
