import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.tsx';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm.tsx';
import { PhotosType } from '../../../types/types.ts';
import { DispatchPropsType, MapPropsType } from './MyPostsContainer.tsx';

export type AddPostFormType = {
  newPostText: string;
  img: PhotosType;
};

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = ({ postsDate, addPost }) => {
  const postsElements = postsDate.map((postDate, i) => (
    <Post key={i} text={postDate.text} likeCount={postDate.likeCount} postImg={postDate.img} />
  ));
  const onAddPost = (value: AddPostFormType) => {
    addPost(value.newPostText, value.img);
  };
  return (
    <div className={styles.postsLayout}>
      <div className={styles.addPostBlock}>
        <AddNewPostForm onSubmit={onAddPost} />
      </div>
      <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    </div>
  );
};
export default React.memo(MyPosts);
