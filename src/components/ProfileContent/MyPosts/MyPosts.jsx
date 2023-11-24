import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';

const MyPosts = ({ profile, addPost, isOwner }) => {
  const postsElements = profile.postsDate.map((postDate, i) => (
    <Post
      key={i}
      text={postDate.text}
      likeCount={postDate.likeCount}
      postImg={postDate.postImg}
    />
  ));
  const onAddPost = (value) => {
    addPost(value.newPostText);
  };
  return (
    isOwner && (
      <div className={styles.postsLayout}>
        <div className={styles.addPostBlock}>
          <AddNewPostForm onSubmit={onAddPost} />
        </div>
        <div className={styles.postsBlock}>
          <h3>My posts</h3>
          <div className={styles.posts}>{postsElements}</div>
        </div>
      </div>
    )
  );
};
export default MyPosts;
