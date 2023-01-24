import React from "react";
import "./Post.css";

const Post = ({ text, likeCount }) => {
  return (
    <div className="post">
      <div className="postDescription">
        <img
          src="https://static.wikia.nocookie.net/die-hard-scenario/images/7/70/DHS-_Elisha_Cuthbert_.jpg"
          alt="img"
        />
        {text}
      </div>
      <div>
        <span>likes: {likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
