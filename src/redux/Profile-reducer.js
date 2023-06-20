const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const initialState = {
  postsDate: [
    { id: 1, text: "Some text", likeCount: 5 },
    { id: 2, text: "Dvi", likeCount: 3 },
    { id: 3, text: "P2p", likeCount: 9 },
    { id: 4, text: "Hey", likeCount: 43 },
    { id: 5, text: "gco", likeCount: 99 },
  ],
  newPostText: "",
  profile: null,
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
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.text };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};
export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export default profileReducer;
