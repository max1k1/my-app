import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({ changeText, addPost, postsDate, newPostText }) => {
  const postsElements = postsDate.map((postDate) => (
    <Post text={postDate.text} likeCount={postDate.likeCount} />
  ));
  const addPostElement = () => {
    addPost();
  };
  const newPostElement = React.createRef();
  const onChangeText = () => {
    let postText = newPostElement.current.value;
    changeText(postText);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
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
