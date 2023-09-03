import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPostsContainer  />
    </div>
  );
};
export default Profile;
