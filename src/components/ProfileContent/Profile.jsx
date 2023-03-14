import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, updateNewPostText}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsDate={profilePage.postsDate} addPost={addPost} newPostText={profilePage.newPostText} updateNewPostText={updateNewPostText}/>
    </div>
  );
};

export default Profile;
