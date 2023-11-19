const SEND_MESSAGE = 'SEND_MESSAGE';
const initialState = {
  dialogsData: [
    { id: 1, userName: 'Max', isActive: false },
    { id: 2, userName: 'Dima', isActive: false },
    { id: 3, userName: 'Pavel', isActive: false },
    { id: 4, userName: 'Katya', isActive: false },
    { id: 5, userName: 'Vinith', isActive: false },
  ],
  messagesData: [{ id: 1, message: 'Some test text' }],
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: state.messagesData.length + 1, message: action.newMessageText },
        ],
      };
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });
export default dialogsReducer;
