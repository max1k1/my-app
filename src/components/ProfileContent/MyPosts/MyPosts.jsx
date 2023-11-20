import React from 'react';
import './MyPosts.css';
import Post from './Post/Post.jsx';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm';

const MyPosts = ({ profile, addPost, isOwner }) => {
  const postsElements = profile.postsDate.map((postDate) => (
    <Post
      key={postDate.postId}
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
      <div className="postsLayout">
        <div className="addPostBlock">
          <AddNewPostForm onSubmit={onAddPost} />
        </div>
        <div className="postsBlock">
          <h3>My posts</h3>
          <div className="posts">{postsElements}</div>
        </div>
      </div>
    )
  );
};
export default MyPosts;
