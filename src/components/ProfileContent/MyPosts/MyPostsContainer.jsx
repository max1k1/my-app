import React from "react";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ dispatch, store }) => {
  let state = store.getState();

  const addPost = () => {
    dispatch(addPostCreator);
  };
  const changeText = (postText) => {
    updateNewPostTextCreator.text = postText;
    dispatch(updateNewPostTextCreator);
  };
  return (
    <MyPosts
      addPost={addPost}
      changeText={changeText}
      postsDate={state.profilePage.postsDate}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
