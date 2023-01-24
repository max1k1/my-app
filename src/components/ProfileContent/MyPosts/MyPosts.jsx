import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({postsDate}) => {
const postsElements = postsDate.map((postDate) => 
  <Post text={postDate.text} likeCount={postDate.likeCount} />);
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">  
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>New post</button>
        </div>
      </div>
      <div className="posts">
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
