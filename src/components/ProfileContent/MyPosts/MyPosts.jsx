import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({ postsDate, dispatch, newPostText }) => {
  const postsElements = postsDate.map((postDate) => (
    <Post text={postDate.text} likeCount={postDate.likeCount} />
  ));
  const newPostElement = React.createRef();
  const addPostCreator ={type: "ADD-POST"}
  const updateNewPostTextCreator ={ type: "UPDATE-NEW-POST-TEXT", text: "text" }
  const addPostElement = () => {
    dispatch(addPostCreator);
  };

  const changeText = () => {
    updateNewPostTextCreator.text = newPostElement.current.value;
    dispatch(updateNewPostTextCreator);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={changeText}
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
