import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, authorizedUserId}) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} authorizedUserId={authorizedUserId}/>
      <MyPostsContainer  />
    </div>
  );
};
export default Profile;
