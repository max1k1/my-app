const SEND_MESSAGE = "SEND_MESSAGE";
const initialState = {
  dialogsData: [
    { id: 1, userName: "Max" },
    { id: 2, userName: "Dima" },
    { id: 3, userName: "Pavel" },
    { id: 4, userName: "Katya" },
    { id: 5, userName: "Vinith" },
  ],
  messagesData: [
    { id: 1, message: "Some test text" },
  ],
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      return {...state,
        messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: action.newMessageText}]
      }
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText});
export default dialogsReducer;
