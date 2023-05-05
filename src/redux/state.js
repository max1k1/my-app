// import profileReducer from "./Profile-reducer";
// import dialogsReducer from "./Dialog-reducer";
// import sidebarReducer from "./sidebar-reducer";
// let store = {
//   _callSubscriber(_state) {},
//   _state: {
//     profilePage: {
//       postsDate: [
//         { id: 1, text: "Some text", likeCount: 5 },
//         { id: 2, text: "Dvi", likeCount: 3 },
//         { id: 3, text: "P2p", likeCount: 9 },
//         { id: 4, text: "Hey", likeCount: 43 },
//         { id: 5, text: "gco", likeCount: 99 },
//       ],
//       newPostText: "",
//     },
//     dialogsPage: {
//       dialogsData: [
//         { id: 1, userName: "Max" },
//         { id: 2, userName: "Dima" },
//         { id: 3, userName: "Pavel" },
//         { id: 4, userName: "Katya" },
//         { id: 5, userName: "Vinith" },
//       ],

//       messagesData: [
//         { id: 1, message: "Some text" },
//         { id: 2, message: "hello" },
//         { id: 3, message: "hello driver" },
//         { id: 4, message: "Hey busy" },
//         { id: 5, message: "hoy" },
//       ],
//       newMessageText: "",
//     },
//     sidebar: {},
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//     this._callSubscriber(this._state);
//   },
// };
// window.store = store; // just for easier date checking from browser console
// export default store;
