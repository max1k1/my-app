import { InferActionsTypes } from './store';

const initialState = {};
type InitialStateType = typeof initialState;
const sidebarReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  return state;
};
type ActionsTypes = InferActionsTypes<typeof actions>;
export const actions = {};
export default sidebarReducer;
