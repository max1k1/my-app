import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsDate={profilePage.postsDate} dispatch={dispatch} newPostText={profilePage.newPostText} />
    </div>
  );
};

export default Profile;
