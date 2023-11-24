import React from 'react';
import styles from '../MyPosts.module.css';
import noImgIcon from '../../../../assets/images/noImageIcon.png';
const Post = ({ text, likeCount, postImg }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postDescription}>
        {postImg ? <img src={postImg} alt="img" /> : <img src={noImgIcon} alt="img" />}
        {text}
      </div>
      <div>
        <div className={styles.postLikesBlock}>
          Likes: <div className={styles.postLikes}>{likeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
