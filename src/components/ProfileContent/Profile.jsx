import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, authorizedUserId,isOwner, updatePhoto}) => {
  return (
    <div className="profile">
      <ProfileInfo updatePhoto={updatePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} authorizedUserId={authorizedUserId}/>
      {/* <MyPostsContainer  /> */}
    </div>
  );
};
export default Profile;
