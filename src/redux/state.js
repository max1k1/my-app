let rerenderEntireTree = (state) => {};
const state = {
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
};
window.state = state; // just for easier date checking from browser console
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export const sendMessage = () => {
  const newMessage = {
    id: state.dialogsPage.messagesData.length + 1,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};
export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};
export const addPost = () => {
  const newPost = {
    id: state.profilePage.postsDate.length + 1,
    text: state.profilePage.newPostText,
    likeCount: 5,
  };
  state.profilePage.postsDate.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export default state;
