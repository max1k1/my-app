import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post.jsx";
import { Field, reduxForm } from "redux-form";

const MyPosts = ({ profilePage, addPost}) => {
  const postsElements = profilePage.postsDate.map(postDate => (
    <Post text={postDate.text} likeCount={postDate.likeCount} />
  ));
  const onAddPost = (value) => {
    addPost(value.newPostText);
  };
  return (
    <div className="postsBlock">
      <h3>My posts</h3>
      <div className="addPostBlock">
        <AddNewPostFormRedux onSubmit={onAddPost}/>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
};

const AddNewPostForm =(props)=>{
  return <form onSubmit={props.handleSubmit}>
      <div>
          <Field component={"textarea"} placeholder={"Enter your post message"} name="newPostText"></Field>
        </div>
        <div>
          <button>New post</button>
        </div>
  </form>
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;
