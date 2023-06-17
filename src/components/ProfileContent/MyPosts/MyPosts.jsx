import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({ profilePage, changeText, addPost}) => {
  const postsElements = profilePage.postsDate.map(postDate => (
    <Post text={postDate.text} likeCount={postDate.likeCount} />
  ));
  const addPostElement = () => {
    addPost();
  };
  const newPostElement = React.createRef();
  const onChangeText = () => {
    changeText(newPostElement.current.value);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">
        <div>
          <textarea
            ref={newPostElement}
            value={profilePage.newPostText}
            onChange={onChangeText}
          ></textarea>
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
