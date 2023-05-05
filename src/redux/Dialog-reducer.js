const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const initialState = {
    dialogsData: [
      { id: 1, userName: "Max" },
      { id: 2, userName: "Dima" },
      { id: 3, userName: "Pavel" },
      { id: 4, userName: "Katya" },
      { id: 5, userName: "Vinith" },
    ],

    messagesData: [
      { id: 1, message: "Some text" },
      { id: 2, message: "hello" },
      { id: 3, message: "hello driver" },
      { id: 4, message: "Hey busy" },
      { id: 5, message: "hoy" },
    ],
    newMessageText: "",
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};
export const sendMessageCreator = { type: SEND_MESSAGE};
export const updateNewMessageTextCreator = {
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: "text",
};
export default dialogsReducer;
