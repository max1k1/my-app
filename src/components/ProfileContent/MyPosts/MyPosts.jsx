import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({ postsDate, addPost, newPostText, updateNewPostText }) => {
  const postsElements = postsDate.map((postDate) => (
    <Post text={postDate.text} likeCount={postDate.likeCount} />
  ));
  const newPostElement = React.createRef();

  const addPostElement = () => {
    addPost();
  };

  const changeText = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">
        <div>
          <textarea ref={newPostElement} value={newPostText} onChange={changeText}></textarea>
        </div>
        <div>
          <button onClick={addPostElement}>New post</button>
        </div>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
