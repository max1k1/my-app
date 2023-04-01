let store = {
  _callSubscriber(_state) {},
  _state: {
    profilePage: {
      postsDate: [
        { id: 1, text: "Some text", likeCount: 5 },
        { id: 2, text: "Dvi", likeCount: 3 },
        { id: 3, text: "P2p", likeCount: 9 },
        { id: 4, text: "Hey", likeCount: 43 },
        { id: 5, text: "gco", likeCount: 99 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.text);
    } else if (action.type === "SEND-MESSAGE") {
      this._sendMessage();
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._updateNewMessageText(action.text);
    }
  },
  _sendMessage() {
    debugger;
    const newMessage = {
      id: this._state.dialogsPage.messagesData.length + 1,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  _addPost() {
    const newPost = {
      id: this._state.profilePage.postsDate.length + 1,
      text: this._state.profilePage.newPostText,
      likeCount: 5,
    };
    this._state.profilePage.postsDate.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
};
window.store = store // just for easier date checking from browser console
export default store;
