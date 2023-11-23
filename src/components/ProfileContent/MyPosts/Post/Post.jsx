import React from "react";
import "../MyPosts.css";
import noImgIcon from "../../../../assets/images/noImageIcon.png"
const Post = ({ text, likeCount, postImg }) => {
  return (
    <div className="post">
      <div className="postDescription">
        {postImg ? <img src={postImg} alt="img" /> : <img src={noImgIcon} alt="img" />}
        {text}
      </div>
      <div>
        <div className="postLikesBlock">Likes: <div className="postLikes">{likeCount}</div></div>
      </div>
    </div>
  );
};

export default Post;
