import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = ({ dispatch, store }) => {
//   let state = store.getState();

//   const addPost = () => {
//     dispatch(addPostCreator);
//   };
//   const changeText = (postText) => {
//     updateNewPostTextCreator.text = postText;
//     dispatch(updateNewPostTextCreator);
//   };
//     <MyPosts
//       addPost={addPost}
//       changeText={changeText}
//       postsDate={state.profilePage.postsDate}
//       newPostText={state.profilePage.newPostText}
//     />
let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    changeText: (postText) => {
      dispatch(updateNewPostTextCreator(postText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
