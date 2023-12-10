import React from 'react';
import styles from '../MyPosts.module.css';
import noImgIcon from '../../../../assets/images/noImageIcon.png';
import { PhotosType } from '../../../../types/types';

type PropsType = { text: string; likeCount: number; postImg: PhotosType };
const Post: React.FC<PropsType> = ({ text, likeCount, postImg }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postDescription}>
        {
          postImg ? <img src={noImgIcon} alt="img" /> : <img src={noImgIcon} alt="img" /> // TODO noImgIcon - add functional of adding photos on post.
        }
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
