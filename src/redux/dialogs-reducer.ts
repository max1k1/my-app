import { DialogType, MessageType } from '../types/types';
import { InferActionsTypes } from './store';

const initialState = {
  dialogsData: [
    { id: 1, userName: 'Max', isActive: false },
    { id: 2, userName: 'Dima', isActive: false },
    { id: 3, userName: 'Pavel', isActive: false },
    { id: 4, userName: 'Katya', isActive: false },
    { id: 5, userName: 'Vinith', isActive: false },
  ] as Array<DialogType>,
  messagesData: [{ id: 1, text: 'Some test text' }] as Array<MessageType>,
};
export type InitialStateType = typeof initialState;
const dialogsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: state.messagesData.length + 1, text: action.newMessageText },
        ],
      };
    default:
      return state;
  }
};
type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions ={
  sendMessageCreator: (newMessageText: string) => ({
    type: 'SEND_MESSAGE',
    newMessageText,
  }as const)
}

export default dialogsReducer;
