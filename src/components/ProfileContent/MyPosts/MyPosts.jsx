import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

const MyPosts = ({ profilePage, addPost }) => {
  const postsElements = profilePage.postsDate.map((postDate) => (
    <Post key={postDate.postId} text={postDate.text} likeCount={postDate.likeCount} />
  ));
  const onAddPost = (value) => {
    addPost(value.newPostText);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">
        <AddNewPostForm onSubmit={onAddPost} />
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
};
export default MyPosts;
