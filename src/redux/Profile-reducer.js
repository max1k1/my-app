const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const initialState = {
  postsDate: [
    { id: 1, text: "Some text", likeCount: 5 },
    { id: 2, text: "Dvi", likeCount: 3 },
    { id: 3, text: "P2p", likeCount: 9 },
    { id: 4, text: "Hey", likeCount: 43 },
    { id: 5, text: "gco", likeCount: 99 },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        postsDate: [
          ...state.postsDate,
          {
            id: state.postsDate.length + 1,
            text: state.newPostText,
            likeCount: 5,
          },
        ],
      };
    // let stateCopy = {...state};
    // stateCopy.postsDate = {...state.postsDate}
    // stateCopy.postsDate.push(newPost);
    // stateCopy.newPostText = "";
    // return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.text };
    default:
      return state;
  }
};
export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});
export default profileReducer;
