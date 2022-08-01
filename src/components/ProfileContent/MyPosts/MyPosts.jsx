import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className="posts">
        <Post text="First post using props" likeCount="5"/>
        <Post text="My story" likeCount="3"/>
        <Post text="Feel better than ever" likeCount="1"/>
      </div>
    </div>
  );
};

export default MyPosts;
