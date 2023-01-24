import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state}) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postsDate={state.postsDate}/>
    </div>
  );
};

export default Profile;
