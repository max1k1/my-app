import React from "react";
import "./Post.css";
import noImgIcon from "../../../../assets/images/noImageIcon.png"
const Post = ({ text, likeCount, postImg }) => {
  return (
    <div className="post">
      <div className="postDescription">
        {postImg ? <img src={postImg} alt="img" /> : <img src={noImgIcon} alt="img" />}
        {text}
      </div>
      <div>
        <span>likes: {likeCount}</span>
      </div>
    </div>
  );
};

export default Post;